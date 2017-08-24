# 
# /*
#  * *********** WARNING **************
#  * This file generated by ModPerl::WrapXS/0.01
#  * Any changes made here will be lost
#  * ***********************************
#  * 01: lib/ModPerl/Code.pm:709
#  * 02: \xampp\perl\bin\.cpanplus\5.10.1\build\mod_perl-2.0.4\blib\lib/ModPerl/WrapXS.pm:626
#  * 03: \xampp\perl\bin\.cpanplus\5.10.1\build\mod_perl-2.0.4\blib\lib/ModPerl/WrapXS.pm:1175
#  * 04: \xampp\perl\bin\.cpanplus\5.10.1\build\mod_perl-2.0.4\Makefile.PL:423
#  * 05: \xampp\perl\bin\.cpanplus\5.10.1\build\mod_perl-2.0.4\Makefile.PL:325
#  * 06: \xampp\perl\bin\.cpanplus\5.10.1\build\mod_perl-2.0.4\Makefile.PL:56
#  * 07: \xampp\perl\bin\cpanp-run-perl.bat:21
#  */
# 


package Apache2::SubProcess;

use strict;
use warnings FATAL => 'all';



use Apache2::XSLoader ();
our $VERSION = '2.000004';
Apache2::XSLoader::load __PACKAGE__;

use APR::PerlIO ();


1;
__END__

=head1 NAME

Apache2::SubProcess -- Executing SubProcesses under mod_perl





=head1 Synopsis

  use Apache2::SubProcess ();
  
  use Config;
  use constant PERLIO_IS_ENABLED => $Config{useperlio};
  
  # pass @ARGV / read from the process
  $command = "/tmp/argv.pl";
  @argv = qw(foo bar);
  $out_fh = $r->spawn_proc_prog($command, \@argv);
  $output = read_data($out_fh);
  
  # pass environment / read from the process
  $command = "/tmp/env.pl";
  $r->subprocess_env->set(foo => "bar");
  $out_fh = $r->spawn_proc_prog($command);
  $output = read_data($out_fh);
  
  # write to/read from the process
  $command = "/tmp/in_out_err.pl";
  ($in_fh, $out_fh, $err_fh) = $r->spawn_proc_prog($command);
  print $in_fh "hello\n";
  $output = read_data($out_fh);
  $error  = read_data($err_fh);
  
  # helper function to work w/ and w/o perlio-enabled Perl
  sub read_data {
      my ($fh) = @_;
      my $data;
      if (PERLIO_IS_ENABLED || IO::Select->new($fh)->can_read(10)) {
          $data = <$fh>;
      }
      return defined $data ? $data : '';
  }
  
  # pass @ARGV but don't ask for any communication channels
  $command = "/tmp/argv.pl";
  @argv = qw(foo bar);
  $r->spawn_proc_prog($command, \@argv);




=head1 Description

C<Apache2::SubProcess> provides the Perl API for running and
communicating with processes spawned from mod_perl handlers.

At the moment it's possible to spawn only external program in a new
process. It's possible to provide other interfaces, e.g. executing a
sub-routine reference (via C<B::Deparse>) and may be spawn a new
program in a thread (since the APR api includes API for spawning
threads, e.g. that's how it's running mod_cgi on win32).




=head1 API


=head2 C<spawn_proc_prog>

Spawn a sub-process and return STD communication pipes:

                               $r->spawn_proc_prog($command);
                               $r->spawn_proc_prog($command, \@argv);
  $out_fh                    = $r->spawn_proc_prog($command);
  $out_fh                    = $r->spawn_proc_prog($command, \@argv);
  ($in_fh, $out_fh, $err_fh) = $r->spawn_proc_prog($command);
  ($in_fh, $out_fh, $err_fh) = $r->spawn_proc_prog($command, \@argv);

=over 4

=item obj: C<$r>
( C<L<Apache2::RequestRec object|docs::2.0::api::Apache2::RequestRec>> )

=item arg1: C<$command> ( string )

The command to be C<$exec()>'ed.

=item opt arg2: C<\@argv> ( ARRAY ref )

A reference to an array of arguments to be passed to the process as
the process' C<ARGV>.

=item ret: ...

In VOID context returns no filehandles (all std streams to the spawned
process are closed).

In SCALAR context returns the output filehandle of the spawned process
(the in and err std streams to the spawned process are closed).

In LIST context returns the input, outpur and error filehandles of the
spawned process.

=item since: 2.0.00

=back

It's possible to pass environment variables as well, by calling:

  $r->subprocess_env->set($key => $value);

before spawning the subprocess.

There is an issue with reading from the read filehandle (C<$in_fh>)):

A pipe filehandle returned under perlio-disabled Perl needs to call
select() if the other end is not fast enough to send the data, since
the read is non-blocking.

A pipe filehandle returned under perlio-enabled Perl on the other hand
does the select() internally, because it's really a filehandle opened
via C<:APR> layer, which internally uses APR to communicate with the
pipe. The way APR is implemented Perl's select() cannot be used with
it (mainly because select() wants fileno() and APR is a crossplatform
implementation which hides the internal datastructure).

Therefore to write a portable code, you want to use select for
perlio-disabled Perl and do nothing for perlio-enabled Perl, hence you
can use something similar to the C<read_data()> wrapper shown in the
L<Synopsis|/Synopsis> section.

Several examples appear in the L<Synopsis|/Synopsis> section.

C<spawn_proc_prog()> is similar to C<fork()>, but provides you a
better framework to communicate with that process and handles the
cleanups for you. But that means that just like C<fork()> it gives you
a different process, so you don't use the current Perl interpreter in
that new process. If you try to use that method or fork to run a
high-performance parallel processing you should look elsewhere. You
could try Perl threads, but they are B<very> expensive to start if you
have a lot of things loaded into memory (since C<perl_clone()> dups
almost everything in the perl land, but the opcode tree). In the
mod_perl "paradigm" this is much more expensive than fork, since
normally most of the time we have lots of perl things loaded into
memory. Most likely the best solution here is to offload the job to
PPerl or some other daemon, with the only added complexity of
communication.

To spawn a completely independent process, which will be able to run
after Apache has been shutdown and which won't prevent Apache from
restarting (releasing the ports Apache is listening to) call
spawn_proc_prog() in a void context and make the script detach and
close/reopen its communication streams. For example, spawn a process
as:

  use Apache2::SubProcess ();
  $r->spawn_proc_prog ('/path/to/detach_script.pl', $args);

and the F</path/to/detach_script.pl> contents are:

  # file:detach_script.pl
  #!/xampp/perl/bin/perl.exe -w
  use strict;
  use warnings;
  
  use POSIX 'setsid';
  
  chdir '/'                or die "Can't chdir to /: $!";
  open STDIN, '/dev/null'  or die "Can't read /dev/null: $!";
  open STDOUT, '+>>', '/path/to/apache/error_log'
      or die "Can't write to /dev/null: $!";
  open STDERR, '>&STDOUT'  or die "Can't dup stdout: $!";
  setsid or die "Can't start a new session: $!";
  
  # run your code here or call exec to another program

reopening (or closing) the STD streams and called C<setsid()> makes
sure that the process is now fully detached from Apache and has a life
of its own. C<chdir()> ensures that no partition is tied, in case you
need to remount it.







=head1 See Also

L<mod_perl 2.0 documentation|docs::2.0::index>.




=head1 Copyright

mod_perl 2.0 and its core modules are copyrighted under
The Apache Software License, Version 2.0.




=head1 Authors

L<The mod_perl development team and numerous
contributors|about::contributors::people>.

=cut
