---
title: Markdown document formatting style
date: 2026-06-17
draft: true
---

# Basic Text Formatting
 **bold text**
*italic text*
***bold and italic***
~~strikethrough~~
`inline code`


# Headings

# Headings 1
## Headings 2
### Headings 3
#### Headings 4

# Lists

## Bullet lists
- Item 1
- Item 2
    - Nested item
    - Nested item

## Numbered lists
1. Item 1
2. Item 2

## Checklist
- [ ] Todo item
- [x] Completed item

# Links

## External link
[Link text](https://google.com)

## Internal note link (quartz)
[[Another note title]]

## Internal link with custom text
[[Another note title|click here]]

# Images and figures
## Basic image
![Alt text](path/to/image.jpg)

## Image from web
![Alt text](https://example.com/image.jpg)

## Local image (put in assets/image/folder)
![Alt text](assets/images/image.jpg)

## Image with caption (HTML)
<figure>
    <img src="assets/images/image.jpg" alt="Alt Text">
    <figcaption>Figure 1: image caption</figcaption>
<figure>

# Blockquotes
> This is a blockquote
> It can span multiple lines
> **Note:** This is an important callout

# Codeblocks

```python
import numpy as np
x = np.array([1,2,3])
```


# Math equations

## Inline math
The equation $ E = mc^2$ is famous.

## Block math
$$
Q = \frac{1}{n} A R^{2/3} S^{1/2}
$$

# Quartz specific features

## Callout boxes
> [!note]
> This is a note callout

> [!warning]
> This is a warning

> [!tip]
> This is a tip

> [!important]
> This is important

# Footnotes

This is a statement with a footnote.[^1]

[^1]: This is the footnote text.


# Horizontal line
---