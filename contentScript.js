// Inserts code button
const codeButton =
  '<div class="bem-TopBar_Body_Button CM-open-editor"><svg aria-hidden="true" focusable="false" width="18" height="10" viewBox="0 0 18 10" class="bem-Svg bem-TopBar_Body_Button_Icon" style="transform: translate(0px, 0px);"><path fill="currentColor" d="M4.858 8.61c.072 0 .13-.024.178-.07a.23.23 0 0 0 .071-.172v-1.31c0-.108-.027-.19-.083-.248a1.693 1.693 0 0 0-.248-.2L2.25 5l2.525-1.598c.102-.061.183-.124.242-.19a.387.387 0 0 0 .09-.27V1.645a.226.226 0 0 0-.072-.178.258.258 0 0 0-.178-.064.413.413 0 0 0-.19.07L.345 4.321a1.09 1.09 0 0 0-.267.23.43.43 0 0 0-.077.264v.368c0 .107.028.2.083.276a.961.961 0 0 0 .26.23L4.67 8.54a.413.413 0 0 0 .19.07zM7.43 10c.213 0 .36-.096.438-.287l4.03-9.357a.3.3 0 0 0 .023-.115.236.236 0 0 0-.071-.166.235.235 0 0 0-.178-.075h-1.126a.449.449 0 0 0-.438.287L6.103 9.644a.3.3 0 0 0-.024.115c0 .06.026.116.077.166.051.05.109.075.172.075H7.43zm5.712-1.39c.047 0 .11-.024.19-.07l4.324-2.85a.961.961 0 0 0 .261-.23.459.459 0 0 0 .083-.276v-.368a.43.43 0 0 0-.077-.264 1.09 1.09 0 0 0-.267-.23l-4.325-2.85a.413.413 0 0 0-.19-.07.258.258 0 0 0-.177.064.226.226 0 0 0-.071.178v1.299c0 .114.03.205.089.27.059.065.14.128.242.19L15.75 5l-2.525 1.61c-.11.076-.193.143-.248.2-.056.058-.083.14-.083.247v1.31a.23.23 0 0 0 .07.173.245.245 0 0 0 .179.07z"></path></svg></div>';

const designerReady = setInterval(function () {
  if ($(".bem-TopBar_Body_PreviewButton").length) {
    insertCodeButton();
    clearInterval(designerReady);
  }
}, 100);

function insertCodeButton() {
  $(".bem-TopBar_Body_Group-left").append(codeButton);
}

// Opens code pane

$(document).on("click", ".CM-open-editor", function () {
  let active;
  const $activePagesButton = $(
    '.active[data-automation-id="left-sidebar-pages-button"]'
  );
  const $activePreviewButton = $(".bem-TopBar_Body_PreviewButton-active");
  const $pageButton = $(".bem-TopBar_Body_ContextLens_Name")[0];
  const settingsButton = ".bem-List_Row.isSelected .bem-Link";

  if (!$activePagesButton.length && !$activePreviewButton.length) {
    $pageButton.click();
    // injectStyles();
  }

  setTimeout(function () {
    $(settingsButton).click();
  }, 200);
});

function injectStyles() {
  $("head").append(
    '<style id="CM-styles">.bem-Panel .bem-Pane:first-child{display:none !important;} data-automation-id="pages-settings"] > div > div:not(:last){display:none !important;}</style>'
  );
}
