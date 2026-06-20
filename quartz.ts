// import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"

// const config = await loadQuartzConfig()
// export default config
// export const layout = await loadQuartzLayout()

import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import * as ExternalPlugin from "./.quartz/plugins"

ExternalPlugin.RecentNotes({
  filter: (f) => {
    const slug = f.slug ?? ""
    return (
      !slug.startsWith("tags/") &&
      !slug.endsWith("/index") &&
      slug !== "index" &&
      slug !== "404"
    )
  },
  limit: 10,
  showTags: false,
})

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()