'use strict';
var _ = require('lodash');

var htmlGenerator = {
    link : function(data) {
      var link = '<a href="<%= href %>" title="<%= title %>"><%= title %></a>';
      var template = _.template(link, {
        href: data.href,
        title: data.title,
        label:data.label
      });
      return template;
    },
    paragraph: function(data) {
      var p = '<p><%= label %></p>';
      var template = _.template(p, {
        label: data.label
      });

      return template;
    },
    list: function(data) {
      var listType = data.type;
      var childrenAsHTML = data.children.map(function(child){
        var li = '<li><%= label %></li>';
        var template = _.template(li, {
          label: child.label
        });

        return template;
      });

      var children = childrenAsHTML.join('');
      var list = '<<%=type%>>' + children + '</<%=type%>>';
      var template = _.template(list, {
        type: listType
      });

      return template;
    },
    tag: function(data) {
      var tagName = data.tagName;
      var tagData = data.data;

      if(data.attributes) {
        var attributes = data.attributes;

        attributes = attributes.map(function(attr){
          return ' ' + attr.key + '="' + attr.value + '"';
        }).join('');

        var tag = '<' + tagName + attributes + '>' + tagData + '</' + tagName + '>';
        return tag;
      } else {

        var noAttrTag = '<' + tagName + '>' + tagData + '</' + tagName + '>';
        return noAttrTag;
      }
    }
};

var pesho = htmlGenerator.paragraph({label: 'HackBulgaria'});
console.log(pesho);

var list = htmlGenerator.list({
    type: 'ul',
    children: [{
        label: 'Item 1'
    }, {
        label: 'Item 2'
    }]
});
console.log(list);

var tag = htmlGenerator.tag({
    tagName: 'div',
    data: htmlGenerator.tag({
        tagName: 'h1',
        data: 'Hello!'
    }),
    attributes: [{
        key: 'class',
        value: 'container'
    }, {
        key: 'id',
        value: 'main-container'
    }]
});

console.log(tag);
