Sending cookies

To automatically send cookies for the current domain, the credentials option must be provided:

fetch('/users', {
  credentials: 'same-origin'
})
This option makes fetch behave similar to XMLHttpRequest with regards to cookies. Otherwise, cookies won't get sent, resulting in these requests not preserving the authentication session.