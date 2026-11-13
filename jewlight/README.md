# JewLight homepage (EN / KO)
Static site — upload the whole folder to https://joycestudios.kr/jewlight/ (index.html at the folder root).

- Default language English; Korean if the device's first language is ko. Choice is saved (localStorage); `?lang=ko|en` forces one.
- Store links: edit the top of `site.js`
  - `ONESTORE_PID` → put your ONE store product ID (empty = falls back to a ONE store search for "JewLight")
  - Google Play link already includes UTM referrer. App Store badge is a disabled "Coming soon / 준비 중" — when live, replace the `<span class="badge soon">` in `badges()` with a link.
- Badges are self-drawn. For store-compliant branding, swap in the official Google Play / ONE store / App Store badge artwork.
- `support.html` = old support hub; `privacy.html`, `terms.html` unchanged.
- Gem animation frames in `assets/gems` (generated from the app's own renderer).
