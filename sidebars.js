/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  documentationSidebar: [
    'documentation/intro',
    {
      type: 'category',
      label: 'Commands',
      items: [{ type: 'autogenerated', dirName: 'documentation/Commands' }],
    },
    {
      type: 'category',
      label: 'Transforms',
      items: [{ type: 'autogenerated', dirName: 'documentation/Transforms' }],
    },
  ],
  // documentationSidebar: [
  //   'intro',
  //   { type: 'autogenerated', dirName: 'documentation' },
  // ],
  tutorialSidebar: [{ type: 'autogenerated', dirName: 'tutorials' }],
  exampleSidebar: [{ type: 'autogenerated', dirName: 'examples' }],
  // But you can create a sidebar manually

  // tutorialSidebar: [
  //   'intro',
  //   {
  //     type: 'category',
  //     label: 'Tutorial',
  //     items: ['tutorials/intro.md'],
  //   },
  // ],
};

export default sidebars;
