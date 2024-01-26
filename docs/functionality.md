# Functionality

I want to be able to:

1. render the contents of any of the 8 pages
2. easily create new instances of renderable data for some of the pages
    - (skills, etc...)
3. have easy ways to render html elements using input values
4. choose whether to render everything on:
    - one page, based on the URI fragment identifier,
      - (website.com/index.html#page)
    - individual pages, based on the directory and index.html file,
      - (website.com/page/index.html)
    - or individual pages based on the directory name
      - (website.com/page/)
      - (only for server-hosted sites - browser only shows folder's contents on 'file://' requests)
5. 'to top' button

## Page rendering

I will need:

- A Page class
  - with navlinkContent, pageContent, ids fields
  - with render() method

## Renderable data

I will need:

- A RenderableData class
  - with name, description, date?, details? fields
  - with render() method
- A RenderableDataGroup class
  - with renderableData fields
  - with render() method

## Renderable elements

I will need:

- An Element class
  - with elementType, content, classes?, id?, otherProperties? fields
  - with render() method
- An ElementType enum-like
  - with H1..H6, P, A, DIV variants

## Post-Host Page IDs

I will need:

- A PAGE_ID_MODE numeric constant
  - which will be used to select the ID from the Page.ids array
  - and to decide which method of getting the page ID part of the URI to use
- A stripUriHost() function
  - that returns the URI minus the host name to work with the base directory
- A getCurrentPageId(hostStrippedUri, pageIdMode) function
  - that returns the ID from the host stripped URI based on the page ID mode

## To Top button

I will need:

- A toTop() function
  - that shows the button when you scroll
  - and smoothly slides back to the top when you click the button
