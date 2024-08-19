export function getClientSideCookie(cookieName: string): string | undefined {
  if (typeof window !== "undefined") {
    let name = cookieName + "=";
    let decodedCookie = decodeURIComponent(window.document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
  }
  return undefined;
}

export function setClientSideCookie(cookieName: string, cookieValue: string) {
  if (typeof window !== "undefined") {
    window.document.cookie = cookieName + "=" + cookieValue + ";";
  }
}
