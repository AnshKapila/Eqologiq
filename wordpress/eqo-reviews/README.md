# Eqo Reviews (WordPress plugin)

Lets signed-in customers write product reviews from the static storefront at
eqologiq.in. The WooCommerce Store API can only read reviews, so this adds the
write side:

`POST https://backend.eqologiq.in/wp-json/eqo/v1/reviews`

```json
{ "product_id": 1357, "rating": 5, "review": "Keeps water cold all day.", "website": "" }
```

- Requires the storefront's JWT (`Authorization: Bearer …`); guests get `401`.
- Every review is **held for approval** in WP Admin → Comments, whatever the
  Discussion settings say. Once approved it appears on the product page
  immediately — the storefront loads reviews live, no rebuild needed.
- Saved as a real WooCommerce review (`comment_type = review` + `rating` meta),
  so star averages and counts update on approval, and verified buyers get
  WooCommerce's "verified owner" flag.
- Shown publicly as first name + last initial ("Priya S."), never an email.
- Limits: 10–5,000 characters, one review per customer per product,
  5 per account and 10 per IP address per hour, plus WordPress's own duplicate
  and flood checks. The `website` field is a honeypot and must stay empty.

Error codes the storefront maps to messages: `eqo_reviews_login_required`,
`eqo_reviews_invalid_product`, `eqo_reviews_closed`, `eqo_reviews_invalid_length`,
`eqo_reviews_not_verified_owner`, `eqo_reviews_duplicate`, `eqo_reviews_rate_limited`.

## Install

Zip this folder (`eqo-reviews/`), then WP Admin → Plugins → Add New → Upload
Plugin → Activate. It needs WooCommerce and the JWT Authentication for WP REST
API plugin, both already on the backend.
