import Title from './components/Title/index.js';
import Paragraph from './components/Paragraph/index.js';

const template = `<div>
        <Title content="Vue组件" />
        <Paragraph content="组件的出现是为了降低项目整体复杂度，更加细粒度的拆分结构和功能。同时也为了提高代码的可读性和可维护性，以及局部代码的可复用性。" />
        <Paragraph content="一个组件一般包含：内容（模版代码）、样式（CSS代码）、功能（JS代码）" />
        <Paragraph content="Vue组件通过普通的配置对象创建。因此要开发一个Vue组件，仅需编写一个组件配置对象即可。" />
        <Paragraph content="Vue组件配置和Vue配置几乎一致，不同在于：1、没有el配置。2、data必须是一个方法，且方法返回的对象作为组件（响应式）数据。3、由于没有el配置，因此组件的虚拟DOM树必须定义在template或render中。" />
        <Paragraph content="使用Vue组件也会创建一个Vue组件实例，并将Vue组件的配置注入到Vue组件实例中，因此可以在Vue组件的模版中直接使用。" />
        <Paragraph content="编写一个Vue组件配置对象，仅需关注组件的模版、样式、功能即可。" />
        <Paragraph content="Vue组件创建后，需要使用，必须注册。Vue组件注册，分为全局注册和局部注册。全局注册，能在整个应用中使用组件。局部注册，仅限于注册的组件内使用。在工程化项目中，仅限于全局使用的组件，进行全局注册。对于其他组件进行局部注册。因为全局注册组件，不利于构建工具打包优化，增加打包的体积。" />
        <Paragraph content="向组件中传递数据的方式有很多种，最常用的方式是通过组件属性。在Vue中，组件属性仅能使用，只读的，不能更改。保证组件数据是单向的。" />
      </div>`;

export default {
    name: 'App',
    components: {
        Title,
        Paragraph
    },
    template
};
