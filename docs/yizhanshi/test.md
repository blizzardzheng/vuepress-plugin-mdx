---
title: sunflower
---
<div ref="customRenderer"></div>

<script>
 // 这里之后换成loader方案
  import React, { Suspense } from 'react';
  import ReactDOM from "react-dom";
  import { Link, useConfig  } from 'docz';
  import Package from '@docz-mdx/index.jsx';
  import Content from './Content.mdx';
  export default {
    mounted() {
      ReactDOM.render(React.createElement(Package, {
        Content
      }), this.$refs.customRenderer);
    }
  }
</script>