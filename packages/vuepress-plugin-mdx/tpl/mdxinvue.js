module.exports = (name, path) => `
---
title: ${name}
---
<div ref="customRenderer"></div>

<script>
  // generate by mdx plugin，do  not modify
  import React, { Suspense } from 'react';
  import ReactDOM from "react-dom";
  import { Link, useConfig  } from 'docz';
  import Package from '@docz-mdx/index.jsx';
  import Content from '${path}';
  export default {
    mounted() {
      ReactDOM.render(React.createElement(Package, {
        Content
      }), this.$refs.customRenderer);
    }
  }
</script>
`;
