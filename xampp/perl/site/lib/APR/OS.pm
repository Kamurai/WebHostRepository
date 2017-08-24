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


package APR::OS;

use strict;
use warnings FATAL => 'all';


use APR ();
use APR::XSLoader ();
our $VERSION = '0.009000';
APR::XSLoader::load __PACKAGE__;



1;
__END__

=head1 NAME

APR::OS - Perl API for Platform-specific APR API




=head1 Synopsis

  use APR::OS ();
  
  # get current thread id
  my $tid = APR::OS::current_thread_id();





=head1 Description

C<APR::OS> provides the Perl interface to platform-specific APR API.

You should be extremely careful when relying on any of the API
provided by this module, since they are no portable. So if you use
those you application will be non-portable as well.




=head1 API

C<APR::OS> provides the following methods:










=head2 C<current_thread_id>

Get the current thread ID

  $tid = APR::OS::current_thread_id();

=over 4

=item ret: C<$tid> ( integer )

under threaded MPMs returns the current thread ID, otherwise 0.

=item since: 2.0.00

=back

Example:

    use Apache2::MPM ();
    use APR::OS ();
    if (Apache2::MPM->is_threaded) {
        my $tid_obj = APR::OS::current_thread_id();
        print "TID: $tid";
    }
    else {
        print "PID: $$";
    }







=head1 See Also

L<mod_perl 2.0 documentation|docs::2.0::index>.




=head1 Copyright

mod_perl 2.0 and its core modules are copyrighted under
The Apache Software License, Version 2.0.




=head1 Authors

L<The mod_perl development team and numerous
contributors|about::contributors::people>.

=cut

