import React from "react";
import "./Titlebar.css";

export default class extends React.Component {
  state = {
    expanded: false
  };

  toggleBox = () => {
    if (!this.state.expanded) this.inputRef && this.inputRef.focus();
    this.setState({ expanded: !this.state.expanded });
  };

  onKeyDown = evt => {
    if (this.props.onEnter && evt.keyCode === 13)
      this.props.onEnter(this.props.value);
  };

  render() {
    const { id, name, title, value, placeholder, onChange } = this.props;
    const inputStateCls = this.state.expanded ? "expanded" : "collapsed";
    return (
      <div className="flex flex-column flex-row-reverse-m items-stretch  pa4-ns pa2 w-100 black-70">
        <div className="pa2 flex flex-end">
          <div style={{ flex: "1 1 auto" }}>
            <input
              ref={input => (this.inputRef = input)}
              type="search"
              className={
                "f2 fr bg-near-white input-reset black-70 " + inputStateCls
              }
              value={value}
              placeholder={placeholder}
              onChange={onChange}
              onKeyDown={this.onKeyDown}
              id={id}
              name={name}
              data-tip="ENTER to start search. ESCAPE to clear box."
            />
          </div>
          <div style={{ flex: "0 0 auto" }}>
            <i
              className="fa fa-search fa-3x pointer pl2"
              onClick={this.toggleBox}
            />
          </div>
        </div>
        <div className="pv2 f2 b flex-auto truncate serif tc tl-ns">
          {title}
        </div>
      </div>
    );
  }
}
