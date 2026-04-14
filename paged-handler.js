class handlers extends Paged.Handler {
  constructor(chunker, polisher, caller) {
    super(chunker, polisher, caller)
  }

  beforeParsed(content) {          
    createToc({
      content: content,
      tocElement: '#toc',
      titleElements: [ 'h1', 'h2', 'h3' ]
    })
  }
}
Paged.registerHandlers(handlers);
