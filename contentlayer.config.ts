// contentlayer.config.ts
import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.md`,
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    category: {type: 'string', required: true} 
  },
  computedFields: {
    // url: { type: 'string', resolve: (post) => `/posts/${post._raw.flattenedPath}` },
    // this isn't needed if using slugs for links
    slug: {type:"string", resolve: (post) => post._raw.flattenedPath}
  },
}))

export default makeSource({ contentDirPath: 'posts', documentTypes: [Post] })