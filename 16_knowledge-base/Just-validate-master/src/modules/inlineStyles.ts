// this is a source version of inlineStyles.compressed.ts
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const errorLabelCss = `
        .just-validate-error-label[data-tooltip="true"] {
          position: fixed;
          padding: 4px 8px;
          background: #423f3f;
          color: white;
          white-space: nowrap;
          z-index: 10;
          border-radius: 4px;
          transform: translateY(-5px);
        }
        .just-validate-error-label[data-tooltip="true"]:before {
	      content: '';
	      width: 0;
	      height: 0;
	      border-left: solid 5px transparent;
	      border-right: solid 5px transparent;
	      border-bottom: solid 5px #423f3f;
	      position: absolute;
	      z-index: 3;
	      display: block;
	      bottom: -5px;
          transform: rotate(180deg);
          left: calc(50% - 5px);
        }
        .just-validate-error-label[data-tooltip="true"][data-direction="left"] {
          transform: translateX(-5px);
        }
        .just-validate-error-label[data-tooltip="true"][data-direction="left"]:before {
	      right: -7px;
	      bottom: auto;
	      left: auto;
          top: calc(50% - 2px);
          transform: rotate(90deg);
        }
        .just-validate-error-label[data-tooltip="true"][data-direction="right"] {
          transform: translateX(5px);
        }
        .just-validate-error-label[data-tooltip="true"][data-direction="right"]:before {
	      right: auto;
	      bottom: auto;
	      left: -7px;
          top: calc(50% - 2px);
          transform: rotate(-90deg);
        }
        .just-validate-error-label[data-tooltip="true"][data-direction="bottom"] {
          transform: translateY(5px);
        }
        .just-validate-error-label[data-tooltip="true"][data-direction="bottom"]:before {
	      right: auto;
	      bottom: auto;
	      left: calc(50% - 5px);
          top: -5px;
          transform: rotate(0deg);
        }
      `;
