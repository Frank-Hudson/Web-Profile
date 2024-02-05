// [Documentation Index](../../docs/index.md)

////////////////////////////////////////////////////////////////////////////////
// ####                               CSS                               #### //
////////////////////////////////////////////////////////////////////////////////

class Styles {
    font;
    background;
    boxShadow;
    opacity;
    textAlign;
    textDecoration;
    lineHeight;
    display;
    floatStyle;
    position;
    top;
    right;
    bottom;
    left;
    width;
    height;
    minWidth;
    minHeight;
    padding;
    border;
    margin;
    overflow;
    zIndex;
    transform;
    transition;
    cursor;

    constructor(
        font = new Font(),
        background = new Background(),
        boxShadow = new BoxShadow(),
        opacity = "initial",
        textAlign = Alignment.initial,
        textDecoration = "initial",
        lineHeight = StyleMeasurement.initial(),
        display = "initial",
        floatStyle = "initial",
        position = "initial",
        top = StyleMeasurement.initial(),
        right = StyleMeasurement.initial(),
        bottom = StyleMeasurement.initial(),
        left = StyleMeasurement.initial(),
        width = StyleMeasurement.initial(),
        height = StyleMeasurement.initial(),
        minWidth = StyleMeasurement.initial(),
        minHeight = StyleMeasurement.initial(),
        padding = new OuterArea(),
        border = new Border(),
        margin = new OuterArea(),
        overflow = "initial",
        zIndex = "initial",
        transform = "initial",
        transition = "initial",
        cursor = "initial"
    ) {
        this.font = font;
        this.background = background;
        this.boxShadow = boxShadow;
        this.opacity = opacity;
        this.textAlign = textAlign;
        this.textDecoration = textDecoration;
        this.lineHeight = lineHeight;
        this.display = display;
        this.floatStyle = floatStyle;
        this.position = position;
        this.top = top;
        this.right = right;
        this.bottom = bottom;
        this.left = left;
        this.width = width;
        this.height = height;
        this.minWidth = minWidth;
        this.minHeight = minHeight;
        this.padding = padding;
        this.border = border;
        this.margin = margin;
        this.overflow = overflow;
        this.zIndex = zIndex;
        this.transform = transform;
        this.transition = transition;
        this.cursor = cursor;
    }

    getCssString() {
        const cssString =
            this.font.getCssString() +
            this.background.getCssString() +
            this.boxShadow.getCssString() +
            ` opacity: ${this.opacity}; ` +
            ` text-align: ${this.textAlign}; text-decoration: ${this.textDecoration}; ` +
            ` line-height: ${this.lineHeight.getCssString()}; ` +
            ` display: ${this.display}; ` +
            ` float: ${this.floatStyle}; ` +
            ` position: ${this.position}; ` +
            ` top: ${this.top.getCssString()}; right: ${this.right.getCssString()}; bottom: ${this.bottom.getCssString()}; left: ${this.left.getCssString()}; ` +
            ` width: ${this.width.getCssString()}; height: ${this.height.getCssString()}; ` +
            ` min-width: ${this.minWidth.getCssString()}; min-height: ${this.minHeight.getCssString()}; ` +
            this.padding.getCssString(OuterAreaType.padding) +
            this.margin.getCssString(OuterAreaType.margin) +
            ` overflow: ${this.overflow}; ` +
            ` z-index: ${this.zIndex}; ` +
            ` transform: ${this.transform}; ` +
            ` transition: ${this.transition}; ` +
            ` cursor: ${this.cursor}; `;

        return cssString;
    }
}

// - - - - - - - - - - - - - - - - - -- - - - - - - - - - - - - - - - - - - - //

class Font {
    family;
    colour;
    size;
    style;
    weight;

    constructor(
        family = "initial",
        colour = "initial",
        size = "initial",
        style = "initial",
        weight = "initial"
    ) {
        this.family = family;
        this.colour = colour;
        this.size = size;
        this.style = style;
        this.weight = weight;
    }

    getCssString() {
        return ` font-family: ${this.family}; color: ${this.colour}; font-size: ${this.size}; font-style: ${this.style}; font-weight: ${this.weight}; `;
    }
}

// - - - - - - - - - - - - - - - - - -- - - - - - - - - - - - - - - - - - - - //

class Background {
    colour;
    image;
    position;

    constructor(colour = "initial", image = "initial", position = "initial") {
        this.colour = colour;
        this.image = image;
        this.position = position;
    }

    getCssString() {
        return ` background-color: ${this.colour}; background-image: ${this.image}; background-position: ${this.position}; `;
    }
}

// - - - - - - - - - - - - - - - - - -- - - - - - - - - - - - - - - - - - - - //

class BoxShadow {
    horizontalOffset;
    verticalOffset;
    blur;
    spread;
    colour;

    constructor(
        horizontalOffset = StyleMeasurement.initial(),
        verticalOffset = StyleMeasurement.initial(),
        blur = StyleMeasurement.initial(),
        spread = StyleMeasurement.initial(),
        colour = "transparent"
    ) {
        this.horizontalOffset = horizontalOffset;
        this.verticalOffset = verticalOffset;
        this.blur = blur;
        this.spread = spread;
        this.colour = colour;
    }

    getCssString() {
        return ` box-shadow: ${this.horizontalOffset.getCssString()} ${this.verticalOffset.getCssString()} ${this.blur.getCssString()} ${this.spread.getCssString()} ${
            this.colour
        }; `;
    }
}

// - - - - - - - - - - - - - - - - - -- - - - - - - - - - - - - - - - - - - - //

class Border {
    top;
    bottom;
    left;
    right;
    radius;

    constructor(
        top = new BorderEdge(),
        bottom = new BorderEdge(),
        left = new BorderEdge(),
        right = new BorderEdge(),
        radius = StyleMeasurement.initial()
    ) {
        this.top = top;
        this.bottom = bottom;
        this.left = left;
        this.right = right;
        this.radius = radius;
    }

    getCssString() {
        return ` border-top: ${this.top.getCssValue()}; border-bottom: ${this.bottom.getCssValue()}; border-left: ${this.left.getCssValue()}; border-right: ${this.right.getCssValue()}; border-radius: ${this.radius.getCssString()}; `;
    }
}

// - - - - - - - - - - - - - - - - - -- - - - - - - - - - - - - - - - - - - - //

class BorderEdge {
    width;
    colour;
    image;
    style;

    constructor(
        width = StyleMeasurement.initial(),
        colour = "initial",
        image = "initial",
        style = "initial"
    ) {
        this.width = width;
        this.colour = colour;
        this.image = image;
        this.style = style;
    }

    getCssString() {
        return ` width: ${this.width.getCssString()}; color: ${
            this.colour
        }; image: ${this.image}; style: ${this.style}; `;
    }

    getCssValue() {
        return ` ${this.width} ${this.colour} ${this.image} ${this.style}`;
    }
}

// - - - - - - - - - - - - - - - - - -- - - - - - - - - - - - - - - - - - - - //

class OuterArea {
    top;
    bottom;
    left;
    right;

    constructor(
        top = StyleMeasurement.initial(),
        bottom = StyleMeasurement.initial(),
        left = StyleMeasurement.initial(),
        right = StyleMeasurement.initial()
    ) {
        this.top = top;
        this.bottom = bottom;
        this.left = left;
        this.right = right;
    }

    getCssString(outerAreaType) {
        return ` ${outerAreaType}-top: ${this.top.getCssString()}; ${outerAreaType}-bottom: ${this.bottom.getCssString()}; ${outerAreaType}-left: ${this.left.getCssString()}; ${outerAreaType}-right: ${this.right.getCssString()}; `;
    }

    getCssValues() {
        return ` ${this.top.getCssString()} ${this.bottom.getCssString()} ${this.left.getCssString()} ${this.right.getCssString()}`;
    }
}

// - - - - - - - - - - - - - - - - - -- - - - - - - - - - - - - - - - - - - - //

class StyleMeasurement {
    value;
    measurementType;

    constructor(value = 0, measurementType = "px") {
        this.value = value;
        this.measurementType = measurementType;
    }

    static initial() {
        this.value = "initial";
        this.measurementType = "";
        return new this();
    }
    static inherit() {
        this.value = "inherit";
        this.measurementType = "";
        return new this();
    }
    static px(value) {
        this.value = value;
        this.measurementType = "px";
        return new this();
    }
    static em(value) {
        this.value = value;
        this.measurementType = "em";
        return new this();
    }
    static pt(value) {
        this.value = value;
        this.measurementType = "pt";
        return new this();
    }
    static cm(value) {
        this.value = value;
        this.measurementType = "cm";
        return new this();
    }
    static vw(value) {
        this.value = value;
        this.measurementType = "vw";
        return new this();
    }
    static vh(value) {
        this.value = value;
        this.measurementType = "vh";
        return new this();
    }
    static percent(value) {
        this.value = value;
        this.measurementType = "%";
        return new this();
    }

    getCssString() {
        return `${this.value}${this.measurementType}`;
    }
}

// - - - - - - - - - - - - - - - - - -- - - - - - - - - - - - - - - - - - - - //

const Alignment = Object.freeze({
    inherit: "inherit",
    initial: "initial",
    centre: "centre",
    left: "left",
    right: "right",
    top: "justify",
});

// - - - - - - - - - - - - - - - - - -- - - - - - - - - - - - - - - - - - - - //

const OuterAreaType = Object.freeze({
    padding: "padding",
    margin: "margin",
});

////////////////////////////////////////////////////////////////////////////////
// ####                               HTML                               #### //
////////////////////////////////////////////////////////////////////////////////

const ElementType = Object.freeze({
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    p: "p",
    div: "div",
    section: "section",
    span: "span",
    a: "a",
    ul: "ul",
    ol: "ol",
    li: "li",
});

// - - - - - - - - - - - - - - - - - -- - - - - - - - - - - - - - - - - - - - //

class MyElement {
    id;
    classes;
    styles;
    attributes;
    innerHTML;
    tags;

    constructor(
        innerHTML = "",
        id = "",
        classes = "",
        styles = new Styles(),
        attributes = {},
        tags = []
    ) {
        this.innerHTML = innerHTML;
        this.id = id;
        this.classes = classes;
        this.styles = styles;
        this.attributes = attributes;
        this.tags = tags;
    }

    getHtmlString() {
        console.error(
            "Method `getHtmlString()` must be implemented by implementors"
        );
    }

    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }

    getClasses() {
        return this.classes;
    }
    addClass(newClass) {
        this.classes += ` ${newClass}`;
    }
    setClasses(classes) {
        this.classes = classes;
    }

    getStyles() {
        return this.styles;
    }
    setStyles(styles) {
        this.styles = styles;
    }

    getAttribute(attribute) {
        return this.attributes[attribute];
    }
    getAttributes() {
        return this.attributes;
    }
    setAttribute(attribute, value) {
        this.attributes[attribute] = value;
    }

    getInnerHtml() {
        return this.styles;
    }
    setInnerHTML(innerHTML) {
        this.innerHTML = innerHTML;
    }
    appendToInnerHTML(innerHTML) {
        this.innerHTML += innerHTML;
    }

    getTag(tag) {
        return this.tags.find((tagItem) => tagItem.name === tag.name);
    }
    getTags() {
        return this.tags;
    }
    addTag(tag) {
        this.tags.push(tag);
    }
    setTags(tags) {
        this.tags = tags;
    }
}

// - - - - - - - - - - - - - - - - - -- - - - - - - - - - - - - - - - - - - - //

class DynamicElement extends MyElement {
    elementType;

    constructor(
        elementType = ElementType.p,
        innerHTML = "",
        id = "",
        classes = "",
        styles = new Styles(),
        attributes = {},
        tags = []
    ) {
        super(innerHTML, id, classes, styles, attributes, tags);
        this.elementType = elementType;
    }
}

// - - - - - - - - - - - - - - - - - -- - - - - - - - - - - - - - - - - - - - //

class Heading extends MyElement {
    level;

    constructor(
        innerHTML,
        level = 1,
        id = "",
        classes = "",
        styles = new Styles(),
        attributes = {},
        tags = []
    ) {
        super(innerHTML, id, classes, styles, attributes, tags);
        this.level = level;
    }
}

// - - - - - - - - - - - - - - - - - -- - - - - - - - - - - - - - - - - - - - //

class Paragraph extends MyElement {
    constructor(
        innerHTML,
        classes = "",
        id = "",
        styles = new Styles(),
        attributes = {},
        tags = []
    ) {
        super(innerHTML, id, classes, styles, attributes, tags);
    }
}

// - - - - - - - - - - - - - - - - - -- - - - - - - - - - - - - - - - - - - - //

class Anchor extends MyElement {
    href;

    constructor(
        href,
        innerHTML,
        id = "",
        classes = "",
        styles = new Styles(),
        attributes = {},
        tags = []
    ) {
        super(innerHTML, id, classes, styles, attributes, tags);
        this.href = href;
    }

    getHtmlString() {
        return `<a href="${this.href}" \
                id="${this.id}" \
                class="${this.classes}" \
                style="${this.styles.getCssString()}"> \
                    ${this.innerHTML} \
            </a>`;
    }

    getHref() {
        return this.href;
    }
    setHref(href) {
        this.href = href;
    }
}

// - - - - - - - - - - - - - - - - - -- - - - - - - - - - - - - - - - - - - - //

class List extends MyElement {
    isOrdered;
    listItems;

    constructor(
        isOrdered = false,
        listItems = [],
        id = "",
        classes = "",
        styles = new Styles(),
        attributes = {},
        tags = []
    ) {
        super(innerHTML, id, classes, styles, attributes, tags);
        this.isOrdered = isOrdered;
        this.listItems = listItems;
    }

    getHtmlString() {
        const listType = this.isOrdered ? "ol" : "ul";

        let listItemsHtmlString = "";
        this.listItems.forEach(function (listItem) {
            listItemsHtmlString += listItem.getHtmlString();
        });
        this.innerHTML = listItemsHtmlString;

        return `<${listType} \
                class="${this.classes}" \
                id="${this.id}" \
                style="${this.styles.getCssString()}" \
                ${this.getAttributesHtmlString()}> \
                    ${this.innerHTML} \
            </${listType}>`;
    }

    getListItem(listItem) {
        return this.listItems.find((item) => item.getId() === listItem.getId());
    }
    getListItems() {
        return this.listItems;
    }
    appendListItem(listItem) {
        this.listItems.push(listItem);
    }
    removeListItem(listItem) {
        this.listItems.splice(this.listItems.indexOf(listItem), 1);
    }
}

// - - - - - - - - - - - - - - - - - -- - - - - - - - - - - - - - - - - - - - //

class ListItem extends MyElement {
    constructor(
        innerHTML,
        classes = "",
        id = "",
        styles = new Styles(),
        attributes = {},
        tags = []
    ) {
        super(innerHTML, id, classes, styles, attributes, tags);
    }

    getHtmlString() {
        return `<li \
                class="${this.classes}" \
                id="${this.id}" \
                style="${this.styles.getCssString()}" \
                ${this.getAttributesHtmlString()}> \
                    ${this.innerHTML} \
            </li>`;
    }
}

// - - - - - - - - - - - - - - - - - -- - - - - - - - - - - - - - - - - - - - //

class ImageElement extends MyElement {
    src;
    alt;

    constructor(
        src,
        alt,
        id = "",
        classes = "",
        styles = new Styles(),
        attributes = {},
        tags = []
    ) {
        super("", id, classes, styles, attributes, tags);
        this.src = src;
        this.alt = alt;
    }

    getHtmlString() {
        const elementIdString = this.id === "" ? "" : `id="${this.id}"`;
        const elementClassesString =
            this.classes === "" ? "" : `classes="${this.classes}"`;
        const elementStylesString =
            this.styles.getCssString() == new Styles().getCssString()
                ? ""
                : `style="${this.styles.getCssString()}"`;

        return `<img \
                src="${this.src}" \
                alt="${this.alt}" \
                ${elementIdString}" \
                ${elementClassesString}" \
                ${elementStylesString}" \
                ${Object.entries(this.attributes).map(
                    ([attribute, value]) => ` ${attribute}="${value}" `
                )} />`;
    }
}

////////////////////////////////////////////////////////////////////////////////
// ####                              Pages                              #### //
////////////////////////////////////////////////////////////////////////////////

const Pages = Object.freeze({
    Home: "home",
    Skills: "skills",
    Portfolio: "portfolio",
    Products: "products",
    Projects: "projects",
    Knowledge: "knowledge",
    Interests: "interests",
    Contact: "contact",
    getDiscriminant: function (page) {
        switch (page.type) {
            case Pages.Home:
                return 0;
            case Pages.Skills:
                return 1;
            case Pages.Portfolio:
                return 2;
            case Pages.Products:
                return 3;
            case Pages.Projects:
                return 4;
            case Pages.Knowledge:
                return 5;
            case Pages.Interests:
                return 6;
            case Pages.Contact:
                return 7;
            default:
                break;
        }
    },
    getLocation: function (page) {
        switch (page.type) {
            case Pages.Home:
                return "";
            case Pages.Skills:
                return "#skills";
            case Pages.Portfolio:
                return "#portfolio";
            case Pages.Products:
                return "#portfolio#products";
            case Pages.Projects:
                return "#portfolio#projects";
            case Pages.Knowledge:
                return "#knowledge";
            case Pages.Interests:
                return "#interests";
            case Pages.Contact:
                return "#contact";
            default:
                break;
        }
    },
});

// - - - - - - - - - - - - - - - - - -- - - - - - - - - - - - - - - - - - - - //

class Page {
    name;
    location;
    head;
    header;
    navigation;
    outline;
    main;
    footer;
    tags;

    constructor(
        name,
        location,
        head = new Head(),
        header = new Header(),
        navigation = new Navigation(),
        outline = new Outline(),
        main = new Main(),
        footer = new Footer(),
        tags = []
    ) {
        this.name = name;
        this.location = location;
        this.head = head;
        this.header = header;
        this.navigation = navigation;
        this.outline = outline;
        this.main = main;
        this.footer = footer;
        this.tags = tags;
    }

    getHtmlString() {
        return (
            this.head.getHtmlString() +
            "<body>" +
            this.header.getHtmlString() +
            this.navigation.getHtmlString() +
            this.outline.getHtmlString() +
            this.main.getHtmlString() +
            this.footer.getHtmlString() +
            "</body>"
        );
    }

    getName() {
        return this.name;
    }

    getLocation() {
        return this.location;
    }
    setLocation(location) {
        this.location = location;
        return this;
    }

    getHead() {
        return this.head;
    }
    setHead(head) {
        this.head = head;
        return this;
    }

    getHeader() {
        return this.header;
    }
    setHeader(header) {
        this.header = header;
        return this;
    }

    getNavigation() {
        return this.navigation;
    }
    setNavigation(navigation) {
        this.navigation = navigation;
        return this;
    }

    getOutline() {
        return this.outline;
    }
    setOutline(outline) {
        this.outline = outline;
        return this;
    }

    getMain() {
        return this.main;
    }
    setMain(main) {
        this.main = main;
        return this;
    }

    getFooter() {
        return this.footer;
    }
    setFooter(footer) {
        this.footer = footer;
        return this;
    }

    getTag(tag) {
        return this.tags.find((item) => item.name === tag.name);
    }
    getTags() {
        return this.tags;
    }
    addTag(tag) {
        this.tags.push(tag);
        return this;
    }
}

// - - - - - - - - - - - - - - - - - -- - - - - - - - - - - - - - - - - - - - //

class Head extends MyElement {
    title;
    stylesheetPath;
    // language; // not implemented

    constructor(title, stylesheetPath = "") {
        super();
        this.title = title;
        this.stylesheetPath = stylesheetPath;
    }

    getHtmlString() {
        return (
            "<head>" +
            "<meta charset='UTF-8' />" +
            "<meta name='viewport' content='width=device-width, initial-scale=1.0' />" +
            `<link rel="stylesheet" id="style-sheet" href="${this.stylesheetPath}" />` +
            `<title>${this.title}</title>` +
            "</head>"
        );
    }

    getTitle() {
        return this.title;
    }
    setTitle(title) {
        this.title = title;
    }

    getStylesheetPath() {
        return this.stylesheetPath;
    }
    setStylesheetPath(stylesheetPath) {
        this.stylesheetPath = stylesheetPath;
    }
}

// - - - - - - - - - - - - - - - - - -- - - - - - - - - - - - - - - - - - - - //

class Header extends MyElement {
    title;
    subtitle;
    styles;

    constructor(title = "Web Profile", subtitle = "Frank Hudson") {
        super();
        this.title = title;
        this.subtitle = subtitle;
        this.styles = new Styles();
    }

    getHtmlString() {
        return (
            "<header id='header'>" +
            `<h1>${this.title}</h1>` +
            `<p>${this.subtitle}</p>` +
            "</header>"
        );
    }

    getTitle() {
        return this.title;
    }
    setTitle(title) {
        this.title = title;
    }

    getSubtitle() {
        return this.subtitle;
    }
    setSubtitle(subtitle) {
        this.subtitle = subtitle;
    }

    getStyles() {
        return this.styles;
    }
    setStyles(styles) {
        this.styles = styles;
    }
}

// - - - - - - - - - - - - - - - - - -- - - - - - - - - - - - - - - - - - - - //

class Navigation extends MyElement {
    page;
    buttons;
    styles;

    constructor(page, buttons = [], styles = new Styles()) {
        super();
        this.page = page;
        this.buttons = buttons;
        this.styles = styles;
    }

    getHtmlString() {
        return (
            "<ul id='nav'>" +
            "<li>" +
            this.createNavigationAnchorHtmlString(Pages.Home) +
            "</li>" +
            "<li>" +
            this.createNavigationAnchorHtmlString(Pages.Skills) +
            "</li>" +
            "<li>" +
            this.createNavigationAnchorDropdownHtmlString(Pages.Portfolio, [
                Pages.Products,
                Pages.Projects,
            ]) +
            "</li>" +
            "<li>" +
            this.createNavigationAnchorHtmlString(Pages.Knowledge) +
            "</li>" +
            "<li>" +
            this.createNavigationAnchorHtmlString(Pages.Interests) +
            "</li>" +
            "<li>" +
            this.createNavigationAnchorHtmlString(Pages.Contact) +
            "</li>" +
            "</ul>"
        );
    }

    createNavigationAnchorHtmlString(page) {
        return new Anchor(
            Page.getLocationFromPagesEnum(page),
            `${page}-button`,
            page.toUpperCase()
        )
            .setClasses(Page.hereOrThere(this.page, page))
            .getHtmlString();
    }

    createNavigationAnchorDropdownHtmlString(mainPage, subPages) {
        const mainAnchor = new Anchor(
            Page.getLocationFromPagesEnum(mainPage),
            `${mainPage}-button`,
            mainPage.toUpperCase()
        )
            .setClasses(Page.hereOrThere(this.page, page))
            .getHtmlString();

        const subAnchorString = subPages.forEach(function (subPage) {
            subAnchorString += new Anchor(
                Page.getLocationFromPagesEnum(subPage),
                `${page}-button`,
                page.toUpperCase()
            ).getHtmlString();
        });

        return (
            "<div class='dropdown'>" +
            mainAnchor +
            "<div class='dropdown-content'>" +
            subAnchorString +
            "</div>" +
            "</div>"
        );
    }

    getButtons() {
        return this.buttons;
    }
    setButtons(buttons) {
        this.buttons = buttons;
    }
    addButton(button) {
        this.buttons.push(button);
    }
    removeButton(button) {
        this.buttons.splice(this.buttons.indexOf(button), 1);
    }

    getStyles() {
        return this.styles;
    }
    setStyles(styles) {
        this.styles = styles;
    }
}

// - - - - - - - - - - - - - - - - - -- - - - - - - - - - - - - - - - - - - - //

class Main extends MyElement {
    styles;
    innerHTML;

    constructor() {
        super();
        this.styles = new Styles();
        this.innerHTML = "";
    }

    getHtmlString() {
        return "<main id='main'>" + this.innerHTML + "</main>";
    }

    getStyles() {
        return this.styles;
    }
    setStyles(styles) {
        this.styles = styles;
    }

    getInnerHTML() {
        return this.innerHTML;
    }
    setInnerHTML(innerHTML) {
        this.innerHTML = innerHTML;
    }
    appendToInnerHTML(innerHTML) {
        this.innerHTML += innerHTML;
    }
}

// - - - - - - - - - - - - - - - - - -- - - - - - - - - - - - - - - - - - - - //

class Outline {
    headings;
    page;
    styles;

    constructor(page) {
        this.headings = {};
        this.page = page;
        this.styles = new Styles();
    }

    getHtmlString() {
        return "<div class='page-outline' id='outline'>" + "</div>";
    }

    getHeadings() {
        return this.headings;
    }
    updateHeadings() {
        // EXAMPLE
        //
        // # First Heading
        // ...
        // ## First Subheading
        // ...
        //
        // # Second Heading
        // ## Second Subheading Heading
        // ...
        // ### First Sub-subheading
        // ...
        //
        // # It's a Complicated Third Heading
        // ...
        // ###### First Sixth-level Subheading
        // ...
        //
        // ```
        // headings = {
        //     "first-heading": {
        //         innerHTML: "First Heading",
        //         "first-subheading": {
        //             innerHTML: "First Subheading",
        //         }
        //     },
        //     "second-heading": {
        //         innerHTML: "Second Heading",
        //         "second-subheading": {
        //             innerHTML: "Second Subheading",
        //             "first-sub-subheading": {
        //                 innerHTML: "First Sub-subheading",
        //             }
        //         }
        //     },
        //     "its-a-complicated-third-heading": {
        //         innerHTML: "It's a Complicated Third Heading",
        //         "first-sixth-level-subheading": {
        //             innerHTML: "First Sixth-level Subheading",
        //         }
        //     }
        // }
        // ```

        // The following code was optimised with help from https://chat.openai.com/

        const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
        const headingGroups = {};

        function addToHeadingGroups(heading, level, parent) {
            const parentId = parent ? parent.id : null;
            const parentInnerHTML = parent ? parent.innerHTML : null;

            if (!headingGroups[parentId]) {
                headingGroups[parentId] = {
                    innerHTML: parentInnerHTML,
                };
            }

            if (level <= 6) {
                const nextLevel = level + 1;
                const childHeadings = document.querySelectorAll(
                    `h${nextLevel}[parent-id="${heading.id}"]`
                );
                childHeadings.forEach(function (child) {
                    addToHeadingGroups(child, nextLevel, heading);
                });
            }
        }

        headings.forEach(function (heading) {
            addToHeadingGroups(heading, 1);
        });

        console.log(headingGroups);
        this.headings = headingGroups;
    }

    getPage() {
        return this.page;
    }

    getStyles() {
        return this.styles;
    }
    setStyles(styles) {
        this.styles = styles;
    }
}

// - - - - - - - - - - - - - - - - - -- - - - - - - - - - - - - - - - - - - - //

class Footer extends MyElement {
    styles;
    innerHTML;

    constructor() {
        super();
        this.styles = new Styles();
        this.innerHTML = "";
    }

    getStyles() {
        return this.styles;
    }
    setStyles(styles) {
        this.styles = styles;
    }

    getInnerHTML() {
        return this.innerHTML;
    }
    setInnerHTML(innerHTML) {
        this.innerHTML = innerHTML;
    }
    appendToInnerHTML(innerHTML) {
        this.innerHTML += innerHTML;
    }
}

// - - - - - - - - - - - - - - - - - -- - - - - - - - - - - - - - - - - - - - //

class PageHeading extends Heading {
    parentId;

    constructor(
        innerHTML,
        level = 1,
        id = "",
        parentId = null,
        classes = "",
        styles = new Styles(),
        attributes = {},
        tags = []
    ) {
        super(innerHTML, level, id, classes, styles, attributes, tags);
        this.parentId = parentId;
    }
}

////////////////////////////////////////////////////////////////////////////////
// ####                             Content                             #### //
////////////////////////////////////////////////////////////////////////////////

class Skill {
    id;
    skill;
    competency;
    areas;
    description;
    tags;

    constructor(id, skill, competency, areas, description = [], tags = []) {
        this.id = id;
        this.skill = skill;
        this.areas = areas;
        this.competency = competency;
        this.description = description;
        this.tags = tags;
    }

    getHtmlString() {
        return (
            `<div class="card" id="${this.id}">` +
            "<h3 class='name'>" +
            this.skill +
            "</h3>" +
            "<p class='detail'>" +
            this.areas.join(", ") +
            ". " +
            this.competency +
            "</p>" +
            "</div>"
        );
    }
}

// - - - - - - - - - - - - - - - - - -- - - - - - - - - - - - - - - - - - - - //

class Achievement {
    id;
    name;
    completionDate;
    area;
    tools;
    skills;
    description;
    content;
    tags;

    constructor(
        id,
        name,
        completionDate,
        area,
        tools = [],
        skills = [],
        description = [],
        content = "",
        tags = []
    ) {
        this.id = id;
        this.name = name;
        this.completionDate = completionDate;
        this.area = area;
        this.tools = tools;
        this.skills = skills;
        this.description = description;
        this.content = content;
        this.tags = tags;
    }

    getHtmlString() {
        return (
            `<div class="card" id="${this.id}">` +
            "<h3 class='name'>" +
            this.name +
            "</h3>" +
            "<p class='detail'>" +
            this.tools.toString() +
            "</p>" +
            "<p class='detail'>" +
            this.area +
            ". <br /> Completed " +
            this.completionDate.toLocaleDateString() +
            "</p>" +
            "</div>"
        );
    }
}

// - - - - - - - - - - - - - - - - - -- - - - - - - - - - - - - - - - - - - - //

class Article {
    id;
    title;
    topic;
    summary;
    content;
    tags;

    constructor(id, title, topic, summary, content = [], tags = []) {
        this.id = id;
        this.title = title;
        this.topic = topic;
        this.summary = summary;
        this.content = content;
        this.tags = tags;
    }

    getHtmlString() {
        return (
            `<div class="card" id="${this.id}">` +
            "<h3 class='name'>" +
            this.title +
            "</h3>" +
            "<p class='detail'>" +
            this.topic +
            "</p>" +
            "<p class='summary'>" +
            this.summary +
            "</p>" +
            "</div>"
        );
    }

    getContentHtml() {
        return this.content.map((paragraph) => `<p>${paragraph}</p>`).join("");
    }
}

// - - - - - - - - - - - - - - - - - -- - - - - - - - - - - - - - - - - - - - //

class ContactInformation {
    phoneNumber;
    emailAddress;
    githubUsername;
    linkedinUsername;

    constructor(phoneNumber, emailAddress, githubUsername, linkedinUsername) {
        this.phoneNumber = phoneNumber;
        this.emailAddress = emailAddress;
        this.githubUsername = githubUsername;
        this.linkedinUsername = linkedinUsername;
    }

    getHtmlString() {
        return (
            "<div class='contact-details'>" +
            `<p class="labelled" id="phone">${this.phoneNumber}</p>` +
            `<p>
                <a 
                    class="labelled" 
                    id="email" 
                    href="mailto:${this.emailAddress}"
                >
                        ${this.emailAddress}
                </a>
            </p>` +
            `<p>
                <a 
                    class="labelled" 
                    id="github" 
                    href="https://github.com/${this.githubUsername}/"
                >
                    ${this.githubUsername}
                </a>
            </p>` +
            `<p>
                <a 
                    class="labelled" 
                    id="linkedin" 
                    href="https://linkedin.com/in/${this.linkedinUsername}/"
                >
                    ${this.linkedinUsername}
                </a>
            </p>` +
            "</div>"
        );
    }
}

// - - - - - - - - - - - - - - - - - -- - - - - - - - - - - - - - - - - - - - //

function fill_element_by_id(elementId, content) {
    const element = document.getElementById(elementId);

    if (element) {
        element.innerHTML = content;
    }
}

////////////////////////////////////////////////////////////////////////////////
// ####                         Theme Selection                         #### //
////////////////////////////////////////////////////////////////////////////////

class Theme {
    variables;
    isDarkMode;
    tags;

    constructor(
        variables = new ThemeVariables(),
        isDarkMode = false,
        tags = []
    ) {
        this.variables = variables;
        this.isDarkMode = isDarkMode;
        this.tags = tags;
    }

    getVariableValue(variable) {
        return this.variables.get(variable);
    }
    setVariableValue(variable, value) {
        this.variables.set(variable, value);
    }
    getVariables() {
        return this.variables;
    }
    setVariables(themeVariables) {
        this.variables = themeVariables;
    }
}

// - - - - - - - - - - - - - - - - - -- - - - - - - - - - - - - - - - - - - - //

[
    "body { font-family }",
    "#header { background-color }",
    "#header h1 { color }",
    "#header p { color }",
    "#nav { color }",
    "#nav { background-color }",
    "#nav a:hover { background-color }",
    ".hamburger-menu { color }",
    "#main { color }",
    "#main { background-color }",
    "#main a { color }",
    "#main a:hover { color }",
    ".totop { color }",
    ".totop { background-color }",
];

class ThemeVariables {
    get(variable) {
        return this[variable];
    }
    set(variable, value) {
        this[variable] = value;
    }

    body = { fontFamily: "sans-serif;" };
    header = {
        backgroundColour: "#777777",
        h1: { colour: "#000000" },
        p: { colour: "#000000" },
    };
    nav = {
        colour: "#000000",
        backgroundColour: "#bbbbbb",
        a_hover: { backgroundColour: "#909090" },
    };
    hamburgerMenu = { colour: "#000000" };
    main = {
        colour: "#000000",
        backgroundColour: "#ffffff",
        a: { colour: "#548ace" },
        a_hover: { colour: "#304568" },
    };
    totop = { colour: "#ffffff", backgroundColour: "#111111" };

    constructor(
        variablesObject = {
            body: { fontFamily: "sans-serif;" },
            header: {
                backgroundColour: "#777777",
                h1: { colour: "#000000" },
                p: { colour: "#000000" },
            },
            nav: {
                colour: "#000000",
                backgroundColour: "#bbbbbb",
                a_hover: { backgroundColour: "#909090" },
            },
            hamburgerMenu: { colour: "#000000" },
            main: {
                colour: "#000000",
                backgroundColour: "#ffffff",
                a: { colour: "#548ace" },
                a_hover: { colour: "#304568" },
            },
            totop: { colour: "#ffffff", backgroundColour: "#111111" },
        }
    ) {
        if (variablesObject.body) {
            this.body = variablesObject.body;
        }
        if (variablesObject.header) {
            this.header = variablesObject.header;
        }
        if (variablesObject.nav) {
            this.nav = variablesObject.nav;
        }
        if (variablesObject.hamburgerMenu) {
            this.hamburgerMenu = variablesObject.hamburgerMenu;
        }
        if (variablesObject.main) {
            this.main = variablesObject.main;
        }
        if (variablesObject.totop) {
            this.totop = variablesObject.totop;
        }
    }
}

////////////////////////////////////////////////////////////////////////////////
// ####                          Functionality                          #### //
////////////////////////////////////////////////////////////////////////////////

function calculate_age(birthday) {
    // SET CURRENT RELATIVE DATES
    const today = new Date();
    const yearNow = today.getUTCFullYear() - 1;
    const monthNow = today.getMonth() + 1;
    const lastMonth = monthNow - 1;
    const dateNow = today.getDate();

    // MONTHS LISTED BY DAY LENGTH (EXCLUDING FEB)
    const monthLengthsMap = new Map([
        [1, 31],
        [2, 28],
        [3, 31],
        [4, 30],
        [5, 31],
        [6, 30],
        [7, 31],
        [8, 31],
        [9, 30],
        [10, 31],
        [11, 30],
        [12, 31],
    ]);

    // SETTING PREVIOUS MONTH LENGTH
    const lastMonthLength = monthLengthsMap.get(lastMonth);

    // BIRTHDAY
    const birthYear = birthday.getFullYear();
    const birthMonth = birthday.getMonth();
    const birthDate = birthday.getDate();

    // INCREASE YEAR AFTER BIRTHDAY
    if (
        (monthNow == birthMonth && dateNow >= birthDate) ||
        monthNow > birthMonth
    ) {
        yearNow++;
    }

    // CALCULATE DIFFERENCE FROM BIRTH TO NOW
    let yearDifference = yearNow - birthYear;
    let monthDifference = monthNow - birthMonth;
    let dateDifference = dateNow - birthDate - 1;

    if (monthDifference < 1) {
        monthDifference += 12;
    }
    if (dateDifference < 1) {
        monthDifference--;
    }
    if (dateDifference < 0) {
        dateDifference += lastMonthLength;
    }

    // RETURN AGE AS OBJECT
    return {
        ageInYears: yearDifference.toString(),
        fullAge: `${yearDifference} years, ${monthDifference} months, and ${dateDifference} days`,
        ageParts: {
            year: yearDifference,
            month: monthDifference,
            date: dateDifference,
        },
    };
}

// - - - - - - - - - - - - - - - - - -- - - - - - - - - - - - - - - - - - - - //

function weekday_name(weekdayIndex) {
    const weekdayNamesMap = new Map([
        [0, "Sunday"],
        [1, "Monday"],
        [2, "Tuesday"],
        [3, "Wednesday"],
        [4, "Thursday"],
        [5, "Friday"],
        [6, "Saturday"],
    ]);

    function fixWeekdayIndex(weekdayIndex) {
        if (weekdayIndex > 6) {
            return fixWeekdayIndex(weekdayIndex - 7);
        } else if (weekdayIndex < 0) {
            return fixWeekdayIndex(weekdayIndex + 7);
        } else {
            return weekdayIndex;
        }
    }

    const workableWeekdayIndex = fixWeekdayIndex(weekdayIndex);
    return weekdayNamesMap.get(workableWeekdayIndex);
}

// - - - - - - - - - - - - - - - - - -- - - - - - - - - - - - - - - - - - - - //

function month_name(monthIndex) {
    const monthNamesMap = new Map([
        [0, "January"],
        [1, "February"],
        [2, "March"],
        [3, "April"],
        [4, "May"],
        [5, "June"],
        [6, "July"],
        [7, "August"],
        [8, "September"],
        [9, "October"],
        [10, "November"],
        [11, "December"],
    ]);

    function fixMonthIndex(monthIndex) {
        if (monthIndex > 11) {
            return fixMonthIndex(monthIndex - 12);
        } else if (monthIndex < 0) {
            return fixMonthIndex(monthIndex + 12);
        } else {
            return monthIndex;
        }
    }

    const workableMonthIndex = fixMonthIndex(monthIndex);
    return monthNamesMap.get(workableMonthIndex);
}

////////////////////////////////////////////////////////////////////////////////
// ####                            Scrolling                            #### //
////////////////////////////////////////////////////////////////////////////////

function to_top() {
    const toTopButton = document.getElementById("totop");

    toTopButton.onclick = function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
}

// - - - - - - - - - - - - - - - - - -- - - - - - - - - - - - - - - - - - - - //

function on_scroll() {
    window.onscroll = function () {
        to_top_update();
        fix_navigation();
    };
}

// - - - - - - - - - - - - - - - - - -- - - - - - - - - - - - - - - - - - - - //

function to_top_update() {
    const toTopButton = document.getElementById("totop");

    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        toTopButton.style.display = "block";
    } else {
        toTopButton.style.display = "none";
    }
}

// - - - - - - - - - - - - - - - - - -- - - - - - - - - - - - - - - - - - - - //

function fix_navigation() {
    const header = document.getElementById("header");
    const headerHeight = header.clientHeight;
    const nav = document.getElementById("nav");
    const navHamburgerButton = document.getElementsByClassName(
        "hamburger-menu"
    )[0];

    if (window.scrollY > headerHeight) {
        nav.style.position = "fixed";
        nav.style.top = 0;
        navHamburgerButton.style.position = "fixed";
        navHamburgerButton.style.top = "var(--hamburger-margin)";
    } else {
        nav.style.position = "absolute";
        nav.style.top = headerHeight + "px";
        navHamburgerButton.style.position = "absolute";
        navHamburgerButton.style.top =
            "calc(var(--hamburger-margin) + var(--header-height))";
    }
}

////////////////////////////////////////////////////////////////////////////////
// ####                              Fixes                              #### //
////////////////////////////////////////////////////////////////////////////////

function is_user_device_mobile() {
    const systemDetails = navigator.platform;
    const mobileOSes = /android|iphone|kindle|ipad/i;
    const swapWidth = 700;
    const windowWidth = window.screen.width;
    console.log(`System: ${systemDetails}\n
Swap at: ${swapWidth}\n
Window Width: ${windowWidth}`);

    const isMobile = mobileOSes.test(systemDetails);

    return isMobile || windowWidth < swapWidth;
}

// - - - - - - - - - - - - - - - - - -- - - - - - - - - - - - - - - - - - - - //

function user_OS_fixes() {
    const isMobile = is_user_device_mobile();
    console.log(`Mobile?: ${isMobile}`);

    const bodyStyle = getComputedStyle(document.body);
    const nav = document.getElementById("nav");
    console.log(`Nav Font Size: ${nav.style.fontSize}`);

    if (isMobile) {
        nav.style.width = "100%";
        nav.style.fontSize = "24pt";
    } else {
        nav.style.width = bodyStyle.getPropertyValue("--nav-width");
        nav.style.fontSize = "16pt";
    }
}

// - - - - - - - - - - - - - - - - - -- - - - - - - - - - - - - - - - - - - - //

function fix_main_margin() {
    const main = document.getElementById("main");
    const bodyWidth = document.body.offsetWidth;
    const bodyStyle = getComputedStyle(document.body);
    const widthPercentage =
        parseInt(bodyStyle.getPropertyValue("--nav-width")) / 100;

    const widthPixels = bodyWidth * widthPercentage;

    if (!is_user_device_mobile()) {
        main.style.setProperty("--main-margin-left", widthPixels + "px");
    } else {
        main.style.marginLeft = "0";
    }
}

////////////////////////////////////////////////////////////////////////////////
// ####                              Events                              #### //
////////////////////////////////////////////////////////////////////////////////

function set_on_clicks() {
    const cardElements = document.querySelectorAll(".card");

    cardElements.forEach(function (cardElement) {
        cardElement.onclick = function () {
            const currentLocationArray = window.location.href.split("/");

            const oldPage = currentLocationArray.pop();

            if (oldPage == "") {
                oldPage = currentLocationArray.pop();
            }

            let newPageDirectory;

            switch (oldPage) {
                case "skills.html":
                    newPageDirectory = "/skills/";
                    break;
                case "products.html":
                    newPageDirectory = "/products/";
                    break;
                case "projects.html":
                    newPageDirectory = "/projects/";
                    break;
                case "knowledge.html":
                    newPageDirectory = "/knowledge/";
                    break;
                case "interests.html":
                    newPageDirectory = "/interests/";
                    break;
                default:
                    newPageDirectory = "/";
                    break;
            }

            const currentLocationWithoutPage = currentLocationArray.join("/");

            const newLocation =
                currentLocationWithoutPage +
                newPageDirectory +
                "index.html#" +
                cardElement.querySelector(".name").innerHTML;

            window.open(newLocation, "_self");
        };
    });

    // - - - - - - - - - - - - - - - - -- - - - - - - - - - - - - - - - - - - //
}

////////////////////////////////////////////////////////////////////////////////
// ####                               MAIN                               #### //
////////////////////////////////////////////////////////////////////////////////

class Tag {
    name;

    constructor(name) {
        this.name = name;
    }
}

// - - - - - - - - - - - - - - - - - -- - - - - - - - - - - - - - - - - - - - //

function main() {
    const stylesheetPath = "./styles/style1.css";
    const siteTitle = "Web Profile";

    const head = document.head;
    const body = document.body;
    const header = document.getElementById("header");
    const nav = document.getElementById("nav");
    const main = document.getElementById("main");
    const footer = document.getElementById("footer");

    on_scroll();

    set_on_clicks();

    fix_main_margin();
    user_OS_fixes();
    to_top();

    const tags = {
        info: new Tag("info"),
        data_content: new Tag("data_content"),
        portfolio: new Tag("portfolio"),
    };

    const myBirthday = new Date(2005, 8, 14);
    const myAge = calculate_age(myBirthday);

    const assets = {
        mobile_advertisement: new ImageElement(
            "../../src/assets/achievements/mobile_advertisement.png",
            "Advertisement for a mobile phone",
            (styles = new Styles((width = StyleMeasurement.percent(100))))
        ),
    };

    const skills = [
        new Skill(
            "HTML",
            "HTML (HyperText Markup Language)",
            "Intermediate",
            ["Frontend Web Development", "Backend Web Development"],
            "Programming language for creating webpage structures."
        ),
        new Skill(
            "CSS",
            "CSS (Cascading Style Sheets)",
            "Beginner",
            ["Frontend Web Development", "Digital Graphics"],
            "Programming language for styling web pages."
        ),
        new Skill(
            "JavaScript",
            "JavaScript",
            "Intermediate",
            [
                "Frontend Web Development",
                "Backend Web Development",
                "Scripting",
            ],
            "Programming and scripting language that gives webpages functionality and interactivity."
        ),
        new Skill(
            "Rust",
            "Rust",
            "Beginner",
            [
                "Applications Development",
                "Backend Development",
                "Game Development",
                "High-level Development",
                "Low-level Development",
                "Scripting",
                "Systems Programming",
                "Web Development",
            ],
            "High-level systems programming language, designed for interacting more safely with low-level concepts."
        ),
        new Skill(
            "Python",
            "Python",
            "Intermediate",
            [
                "Applications Development",
                "High-level programming",
                "Scripting",
                "Web Development",
            ],
            "Programming and scripting lanuage commonly used for data science and statistics, as well as for testing code, teaching programming, and building small and portable scripts."
        ),
    ];
    const achievements = [
        new Achievement(
            "Advertisement",
            "Advertisement",
            new Date(),
            ["Marketing"],
            ["Photoshop"],
            ["Graphic Design"],
            ["An advertisement for a mobile phone made in Photoshop."],
            assets.mobile_advertisement.getHtmlString()
        ),
        new Achievement(
            "My_First_Database",
            "My First Database",
            new Date(),
            ["Database Development", "Relational Database Systems"],
            ["Microsoft Access Database"],
            ["Database Management"],
            [
                "My first database, made for a fake medical clinic with Microsoft Access database.",
            ]
        ),
    ];
    const articles = [
        // ###                         Knowledge                         ### //
        //  -- -- -- -- -- -- -- -- -- --------- -- -- -- -- -- -- -- -- --  //
        new Article(
            "What_is_Time_Travel?",
            "What is Time Travel?",
            ["Time", "Time Travel", "Theoretical Physics"],
            "In this article, I explain my understanding of time travel, paradoxes, and timelines, as well as some minor theoretical physics.",
            [
                "The idea of time travel is a complicated one. It raises many questions about the nature of time, whether that be what it is in a physical sense, or if there is any way to travel through it in any direction other than our forward.",
                "Throughout history, many people have theorised the ability to travel to the past, or even the now <attr title='lightspeed warping, etc\nI'm not a physicist, I shouldn't have even started this article'>proven</attr> ability to travel to the future faster than we are currently.",
            ]
        ),
        // ###                         Interests                         ### //
        //  -- -- -- -- -- -- -- -- -- --------- -- -- -- -- -- -- -- -- --  //
        new Article(
            "I_Like_Gaming",
            "I Like Gaming",
            ["Games", "Gaming"],
            "This article will cover the kinds of games I like, and how I play them.",
            [
                "I like gaming because I like to play games, and I like to play games because I like to play games.",
                "I talk and I talk and I talk.",
            ]
        ),
    ];

    const pages = [
        new Page("home", "")
            .addTag(tags["info"])
            .setHead(new Head(siteTitle, stylesheetPath))
            .setHeader(new Header())
            .setNavigation(new Navigation())
            .setMain(new Main())
            .setFooter(new Footer()),
        new Page("skills", "#skills")
            .addTag(tags["info"])
            .addTag(tags["data_content"])
            .setHead(new Head("Skills - " + siteTitle, stylesheetPath))
            .setHeader(new Header())
            .setNavigation(new Navigation())
            .setMain(new Main())
            .setFooter(new Footer()),
        new Page("portfolio", "#portfolio")
            .addTag(tags["info"])
            .addTag(tags["data_content"])
            .addTag(tags["portfolio"])
            .setHead(new Head("Portfolio - " + siteTitle, stylesheetPath))
            .setHeader(new Header())
            .setNavigation(new Navigation())
            .setMain(new Main())
            .setFooter(new Footer()),
        new Page("products", "#portfolio#products")
            .addTag(tags["info"])
            .addTag(tags["data_content"])
            .addTag(tags["portfolio"])
            .setHead(
                new Head("Products - Portfolio - " + siteTitle, stylesheetPath)
            )
            .setHeader(new Header())
            .setNavigation(new Navigation())
            .setMain(new Main())
            .setFooter(new Footer()),
        new Page("projects", "#portfolio#projects")
            .addTag(tags["info"])
            .addTag(tags["data_content"])
            .addTag(tags["portfolio"])
            .setHead(
                new Head("Projects - Portfolio - " + siteTitle, stylesheetPath)
            )
            .setHeader(new Header())
            .setNavigation(new Navigation())
            .setMain(new Main())
            .setFooter(new Footer()),
        new Page("knowledge", "#knowledge")
            .addTag(tags["info"])
            .addTag(tags["data_content"])
            .setHead(new Head("Knowledge - " + siteTitle, stylesheetPath))
            .setHeader(new Header())
            .setNavigation(new Navigation())
            .setMain(new Main())
            .setFooter(new Footer()),
        new Page("interests", "#interests")
            .addTag(tags["info"])
            .addTag(tags["data_content"])
            .setHead(new Head("Interests - " + siteTitle, stylesheetPath))
            .setHeader(new Header())
            .setNavigation(new Navigation())
            .setMain(new Main())
            .setFooter(new Footer()),
        new Page("contact", "#contact")
            .addTag(tags["info"])
            .addTag(tags["data_content"])
            .setHead(new Head("Contact - " + siteTitle, stylesheetPath))
            .setHeader(new Header())
            .setNavigation(new Navigation())
            .setMain(new Main())
            .setFooter(new Footer()),
    ];
    const themes = {
        defaultLight: new Theme(new ThemeVariables()),
        defaultDark: new Theme(new ThemeVariables()),
    };

    const directorySplitLocationArray = window.location.href.split("/");
    const idSplitLocationArray = window.location.href.split("#");

    let currentPage = directorySplitLocationArray.pop();
    if (currentPage == "") {
        currentPage = directorySplitLocationArray.pop();
    }
    if (currentPage.includes("index.html")) {
        currentPage = directorySplitLocationArray.pop() + "/index.html";
    }

    let currentContentId = idSplitLocationArray.pop().replace(/%20/g, "_");
    if (currentContentId.includes(".html")) {
        currentContentId = "";
    }

    const directorySplitLocationWithoutPageArray = directorySplitLocationArray.join(
        "/"
    );

    switch (currentPage) {
        case "skills.html":
            break;
        case "skills/index.html":
            const targetSkill = skills.find(
                (skill) => skill.id === currentContentId
            );

            document.title = `${targetSkill.skill} ${document.title}`;
            fill_element_by_id("content-name", targetSkill.skill);
            fill_element_by_id("skill-area", targetSkill.areas);
            fill_element_by_id("skill-competency", targetSkill.competency);
            fill_element_by_id("skill-description", targetSkill.description);
            break;
        case "portfolio.html":
            break;
        case "products.html":
            break;
        case "projects.html":
            break;
        case "products/index.html":
        case "projects/index.html":
            const targetAchievement = achievements.find(
                (achievement) => achievement.id == currentContentId
            );

            document.title = `${targetAchievement.name} ${document.title}`;
            fill_element_by_id("content-name", targetAchievement.name);
            fill_element_by_id(
                "achievement-completed",
                targetAchievement.completionDate.toLocaleDateString()
            );
            fill_element_by_id("achievement-area", targetAchievement.area);
            fill_element_by_id(
                "achievement-description",
                targetAchievement.description
            );
            fill_element_by_id(
                "achievement-content",
                targetAchievement.content
            );
            fill_element_by_id("achievement-tools", targetAchievement.tools);
            fill_element_by_id("achievement-skills", targetAchievement.skills);
            break;
        case "knowledge.html":
            break;
        case "interests.html":
            break;
        case "knowledge/index.html":
        case "interests/index.html":
            const targetArticle = articles.find(
                (article) => article.id === currentContentId
            );

            document.title = `${targetArticle.title} ${document.title}`;
            fill_element_by_id("content-name", targetArticle.title);
            fill_element_by_id("article-topic", targetArticle.topic);
            fill_element_by_id(
                "article-content",
                targetArticle.getContentHtml()
            );
            break;
        case "contact.html":
            break;
        default:
            const birthdayElement = document.getElementById("birthday");
            const ageElement = document.getElementById("age");

            // `Wednesday 14 September, 2005`
            birthdayElement.innerHTML = `${weekday_name(
                myBirthday.getDay()
            )} ${myBirthday.getDate()} ${month_name(
                myBirthday.getMonth()
            )}, ${myBirthday.getFullYear()}`;

            ageElement.innerHTML = myAge.ageInYears;
            ageElement.title = myAge.fullAge + ", to be exact";
            break;
    }
}

main();
