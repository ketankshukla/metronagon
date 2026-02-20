Yes — you can avoid those giant Amazon URLs.

## The clean “short” Amazon link you can use

Amazon/KDP’s own recommended format is simply:

**amazon.com/dp/ASIN** ([kdp.amazon.com][1])

So instead of copying a long URL with a bunch of extra stuff, you can use the **10-character ASIN** and build a short link like that. KDP even lists the country variants (amazon.co.uk/dp/ASIN, amazon.ca/dp/ASIN, etc.). ([kdp.amazon.com][1])

### How to get the ASIN (fast)

KDP says you can find the ASIN either:

* **Under the book’s title in your KDP Bookshelf**, or
* On the Amazon book page under **“Product Details”** ([kdp.amazon.com][1])

### If you already copied a long URL

You can usually shorten it by keeping only the part up through the ASIN:

* If you see something like:
  `amazon.com/…/dp/B0XXXXXXX/ref=…?…`
  keep only:
  `amazon.com/dp/B0XXXXXXX`

(Everything after the ASIN is the “long junk” you don’t need for a normal Buy button.)

## Kindle vs Paperback links

If you want **separate buttons** (one for Kindle, one for Paperback), open the Amazon page with the **format you want selected**, then grab that format’s ASIN from the URL/Product Details and use the same `…/dp/ASIN` pattern. ([kdp.amazon.com][1])

## If you want an even “prettier” short link (optional)

If you join **Amazon Associates**, Amazon gives you tools (SiteStripe) that can generate **short affiliate links** (often the `amzn.to/...` style) right from the product page. ([Amazon Associates][2])
They also document the basic affiliate link format using `/dp/ASIN` plus your `tag=`. ([Amazon Associates][3])

## My practical recommendation for your website

Use **your own clean button URL** on your site and redirect it to Amazon, like:

* `yourdomain.com/buy/book-title` → redirects to `amazon.com/dp/ASIN`

That way your buttons always look clean, and you can change the Amazon destination later without editing your site layout everywhere.

If you paste me **one** of your current long Amazon URLs, I’ll show you exactly what the shortest clean version should be (Kindle and paperback if you want both).

[1]: https://kdp.amazon.com/en_US/help/topic/G200652190 "Linking from Your Website"
[2]: https://affiliate-program.amazon.com/help/node/topic/GJMMT7G4C8K4Y3AY "
                
            Amazon.com Associates Central - Help 
        "
[3]: https://affiliate-program.amazon.com/help/node/topic/GP38PJ6EUR6PFBEC "
                
            Amazon.com Associates Central - Help 
        "
