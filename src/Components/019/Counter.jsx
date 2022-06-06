import React from 'react';

class Counter extends React.Component {
  constructor() {
    super();
    this.state = { counter: 0 };
  }

  doClick = () => {
    this.setState((s) => ({ counter: s.counter + 1 }));
  };

  render() {
    return (
      <>
        <div>
          {this.state.counter}: {this.props.when}
        </div>
        <button onClick={this.doClick}>
          <svg>
            <use href='#star' />
          </svg>
          <svg>
            <use href='#moon' className='kitas-svg' />
          </svg>
          <svg>
            <use className='trecias-svg' href='#star' />
          </svg>
        </button>
      </>
    );
  }
}

export default Counter;
