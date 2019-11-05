const socialMetaTags = (data) => {
  console.log('WERD');

  console.log(data);

  const { tagType, title, description, image, url } = data;
  const head = document.getElementsByTagName('head');

  const tags = `
  <meta property="${tagType}:title" content=${title}>
  <meta property="${tagType}:description" content=${description}>
  <meta property="${tagType}:image" content=${image}>
  <meta property="${tagType}:url" content=${url}>
  `;
  head.innerHTML = tags;
};

class MetaTags {
  constructor(data) {
    this.tagType = data.tagType;
    this.title = data.title;
    this.description = data.description;
    this.image = data.image;
    this.url = data.url;
  }

  createTags() {
    return `
    <meta property="${this.tagType}:title" content=${this.title}>
    <meta property="${this.tagType}:description" content=${this.description}>
    <meta property="${this.tagType}:image" content=${this.image}>
    <meta property="${this.tagType}:url" content=${this.url}>
    `;
  }

  setMetaTag() {
    const head = document.getElementsByTagName('head');
    head.innerHTML = this.createTags();
  }
}

export default socialMetaTags;
export { MetaTags };
