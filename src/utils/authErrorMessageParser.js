export default function (errorCode) {
  switch (errorCode) {
    case 'auth/invalid-email':
      return 'Geçersiz email';
    case 'auth/email-already-exists':
      return 'Kullanıcı zaten kayıtlı';
    case 'auth/user-not-found':
      return 'Kullanıcı Bulunamadı';

    default:
      return errorCode;
  }
}
