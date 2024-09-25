import React from 'react';

const ReactForm = () => {
  return (
    <main className="form reactForm hasCoverImage">
      <div className="formContent">
        <header>
          <div
            className="formCoverImageContainer col-12 background-cover background-center"
            style={{ backgroundImage: 'url("https://v5.airtableusercontent.com/v3/u/33/33/1727071200000/Q6mHQ5xmrDQ9w4W2I-a-CQ/2V0IXG9y6ik-ZDjgp7MayUaKSE_L0tjIUhaRHxjXcFbpOptTMThQQzzIANU2zRW5oRSD56HpoE71yq8M68vW8UKH9utMQpTavaAW2zyb4bVmZ9HsU8CmwxhGfyVcBO9X1mRvajQHsiWva0ALc10Nxw/qH4aXpjDr49jjaPbEG7nQIkVYCTBK7qYjup9P7ivQdo")',
            height: '240px'
          }}
          />
          <div className="formHeader mx-auto max-width-2 lg-rounded-big md-rounded-big sm-rounded-big colors-background-default">
            <div className="formLogoImageContainer">
              <img
                src="https://v5.airtableusercontent.com/v3/u/33/33/1727071200000/4HBV_7y5zTetCJtb51b1QA/RK7rl6okJTmS6Ea7tgbwp09-ZRZTluz71I4JxsepjGD6rd2p2R9hfRBcpzIDLmgKwSuCQSE-SUU3aS-oCC8ngt7xMXJnTnyC1689UwC0cU59la1jGDWPJiddwtBQRF-kv4zG2YsgWxC8s1wm62s5Gw0HFGjEH8bR15mtK6GVPjoJttOG1lMIr4R7q28Zg7k2/dIJ52iMbKT1ra3fvWkr065flx-KOZD2o0vXuR-EFIOI"
                alt="Logo"
                style={{ maxWidth: '200px' }}
              />
            </div>
            <h1 className="formName">See something out of date on this page?</h1>
            <p className="formDescription break-word">
              Suggest an update for Jobs NYC
              <br />
              Use this form to let us know what needs to be updated
            </p>
          </div>
        </header>
        <div className="formFieldAndSubmitContainer px3 py1">
          <div className="formFieldContainer mx-auto max-width-2">
            <FormField
              label="What is the name of the program that needs to be updated?"
              inputProps={{
                type: 'text',
                id: 'program-name',
                defaultValue: 'Brooklyn Public Library ESOL Program',
              }}
            />
            <FormField
              label="Link to program page on Jobs NYC"
              inputProps={{
                type: 'url',
                id: 'program-link',
              }}
            />
            <SelectField label="What section needs to be updated?" options={[
              "Basic information (summary of program)",
              "Recruiting status (actively recruiting or not)",
              "Who it's for",
              "Schedule",
              "Next steps",
              "Other (specify in the description below)"
            ]} />
            <TextAreaField label="Tell us how to make this program listing better:" />
            <FormField
              label="What is your email address in case we have follow up questions?"
              inputProps={{
                type: 'email',
                id: 'email',
                required: true,
              }}
              required
            />
          </div>
          <div className="formSubmit mx-auto max-width-2 baymax mt4">
            <div id="formValidationMessage" className="formValidationMessage focus-visible" tabIndex="-1">
              <p></p>
            </div>
            <input type="button" className="submitButton blue rounded-big px2 py1 text-white strong huge border-none submit styled-input focus-visible pointer link-quiet" value="Submit" />
            <div className="mt2 quieter small flex items-center">
              <div>Do not submit passwords through this form. <span tabIndex="0" role="button" className="link-quiet understroke pointer focus-visible">Report malicious form</span></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

const FormField = ({ label, inputProps, required }) => (
  <div className={`sharedFormField ${required ? 'required' : ''}`}>
    <label htmlFor={inputProps.id} className="title">
      {label} {required && <span className="text-red" aria-hidden="true" role="presentation">*</span>}
    </label>
    <div className="cellContainer">
      <div className="cell formCell">
        <div className="flex-auto flex baymax">
          <input {...inputProps} className="col-12 line-height-4 rounded border-thick border-darken2 border-darken3-hover detailCursor-border-blue border-blue-focus detailCursor-stroked-blue-focus" style={{ padding: '6px' }} />
        </div>
      </div>
    </div>
  </div>
);

const SelectField = ({ label, options }) => (
  <div className="sharedFormField">
    <div className="cursor-default title">{label}</div>
    <div className="cellContainer">
      <div className="cell formCell" role="combobox" aria-haspopup="true">
        <ul role="listbox" className="focus-container" aria-multiselectable="true">
          {options.map((option, index) => (
            <li key={index} role="option" className="flex mb1 pointer items-center" tabIndex="-1">
              <div className="flex-none flex-inline items-center justify-center rounded border-thick mr1 colors-background-default colors-border-default" style={{ width: '16px', height: '16px' }}></div>
              <div style={{ paddingTop: '2px', paddingBottom: '2px', maxWidth: '448px' }}>
                <span className="flex-inline items-center pill pl1 pr1 line-height-4 fit flex-none grayLight2 print-color-exact text-dark">
                  <div className="flex-auto truncate-pre" title={option}>{option}</div>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const TextAreaField = ({ label }) => (
  <div className="sharedFormField">
    <div className="cursor-default title">{label}</div>
    <div className="cellContainer">
      <div className="cell formCell" contentEditable="true">
        <div className="flex-auto flex baymax">
          <div className="width-full">
            <div className="flex-auto relative baymax quillWrapper">
              <div className="ql-container">
                <div className="ql-editor ql-blank" contentEditable="true" role="textbox" aria-multiline="true">
                  <p><br /></p>
                </div>
                <div className="ql-clipboard" contentEditable="true" tabIndex="-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ReactForm;


