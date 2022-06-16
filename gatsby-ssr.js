const React = require("react")

exports.onRenderBody = ({
  setPreBodyComponents,
  setBodyAttributes,
  setHeadComponents,
  setPostBodyComponents

}) => {
  setPreBodyComponents([
    <div id="preloader">
        
    </div>
  ])
  setBodyAttributes({
    className: "preloader_active"
  })
  setHeadComponents([
    <link as="script" rel="preload" href="/scripts/preloader.js" />
  ])
  setPostBodyComponents([
    <script src="/scripts/preloader.js" />
  ])

}