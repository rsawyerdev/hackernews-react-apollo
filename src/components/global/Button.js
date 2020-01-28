import React, { Component } from 'react'

class Button extends Component {

    constructor(props) {
        super(props)
        this.state = {
            pressed: false,
            over: false
        }
    }

    onClick = () => {
        this.props.onClick(this.props.value)
    }

    onMouseOver = () => {
        this.setState({
            over: true
        })
    }

    onMouseOut = () => {
        this.setState({
            over: false
        })
    }

    render() {
        let bgColor = 'white'
        let fontColor = 'black'

        if (this.state.over) {
            bgColor = 'grey'
            fontColor = 'blue'
            cursor = 'pointer'
            //color = 'blue'
        }

        return (
            <div>
                paddingLeft={this.props.paddingLeft}
                paddingTop={this.props.paddingTop}
                minHeight={this.props.minHeight || 30}
                tansition={this.props.transition}
                backgroundColor={bgColor}
                fontColor={fontColor}
                height={this.props.height || 30}
                justifyContent={'center'}
                alignItems={this.props.alignItems}
                onMouseOut={this.onMouseOut}
                onMouseOver={this.onMouseOver}
                cursor={cursor}
                onClick={this.onClick}>
                    <Label boldString={this.props.boldString}
                            threshold={this.props.threshold}
                            pointerEvents="none"
                            fontSize={this.props.fontSize}
                            text={this.props.text} />
            </div>
        )
    }
}

export default Button