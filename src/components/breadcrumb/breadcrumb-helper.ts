export function breadcrumbHelper() {
  function translate(item: string): string {
    switch (item) {
      case 'courses':
        return 'دوره ها';
      case 'contact':
        return 'تماس با ما';
      case 'login':
        return 'ورود';
      case 'signup':
        return 'ثبت نام';
      default:
        return item;
        break;
    }
  }

  return {
    translate,
  };
}
