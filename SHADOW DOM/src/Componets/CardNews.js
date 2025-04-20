class CardNews extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
  }

  build() {
    const componentRoot = document.createElement("div");
    componentRoot.setAttribute("class", "news-card");

    const cardLeft = document.createElement("div");
    cardLeft.setAttribute("class", "content_left");

    const title = document.createElement("h2");
    title.textContent = this.getAttribute("title");
    title.setAttribute("class", "title");

    const summary = document.createElement("p");
    summary.setAttribute("class", "summary");
    summary.textContent = this.getAttribute("summary");

    const date = document.createElement("span");
    date.setAttribute("class", "date");
    date.textContent = this.getAttribute("date");

    const cardRight = document.createElement("div");

    const img = document.createElement("img");
    img.src = this.getAttribute("img-url");

    img.setAttribute("alt", "imagem da noticia");

    cardRight.setAttribute("class", "content_right");

    componentRoot.appendChild(cardLeft);
    componentRoot.appendChild(cardRight);

    cardLeft.appendChild(title);
    cardLeft.appendChild(summary);
    cardLeft.appendChild(date);

    cardRight.appendChild(img);

    return componentRoot;
  }

  styles() {
    const style = document.createElement("style");
    style.textContent = `
        .news-card {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: #ffffff;
            border: 1px solid #ddd;
            border-radius: 12px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            padding: 20px;
            max-width: 700px;
            margin: 20px auto;
            transition: transform 0.2s ease;
            }

            .news-card:hover {
            transform: scale(1.02);
            }

            .content_left {
            flex: 1;
            padding-right: 20px;
            }

            .content_left .title {
            font-size: 1.5rem;
            margin-bottom: 10px;
            color: #333;
            }

            .content_left .summary {
            font-size: 1rem;
            color: #555;
            margin-bottom: 10px;
            }

            .content_left .date {
            font-size: 0.875rem;
            color: #888;
            }

            .content_right img {
            width: 150px;
            height: auto;
            border-radius: 8px;
            object-fit: cover;
            }
    `
    return style
    }
}

customElements.define("card-news", CardNews);
