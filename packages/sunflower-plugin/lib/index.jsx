import React, { Suspense } from 'react';
import { Link, useConfig  } from 'docz';
import Theme from 'docz-theme-default';

console.log('useConfig', useConfig);
export default ({ Content }) => {
  return <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Theme linkComponent={Link} db={{
          config: {
            "codeSandbox": true,
            "themeConfig": {
              "colors": {
                "primary": "tomato"
              },
              codemirrorTheme: 'docz-light',
              showPlaygroundEditor: false
          }
        }
        }}>
          <Content />
        </Theme>
      </Suspense>
    </div>
}
