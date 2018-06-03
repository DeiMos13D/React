import React, {Component} from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css'
import {connect} from 'react-redux'
import {filterData} from './AC'

class Calendar extends Component {
    static defaultProps = {
        numberOfMonths: 2,
    };

    handleDayClick = (day) => {
        const range = DateUtils.addDayToRange(day, this.props.state);
        this.props.filterData(range)
    }
    handleResetClick = () => {
        this.props.filterData({from: null, to: null})
    }

    render() {
        const { from, to } = this.props.state;
        const modifiers = { start: from, end: to };
        return (
            <div className="RangeCalendar">
                <DayPicker
                    className="Selectable"
                    numberOfMonths={this.props.numberOfMonths}
                    selectedDays={[from, { from, to }]}
                    modifiers={modifiers}
                    onDayClick={this.handleDayClick}
                />
                <p>
                    {!from && !to && 'Please select the first day.'}
                    {from && !to && 'Please select the last day.'}
                    {from &&
                    to &&
                    `Selected from ${from.toLocaleDateString()} to
                ${to.toLocaleDateString()}`}{' '}
                    {from &&
                    to && (
                        <button className="link" onClick={this.handleResetClick}>
                            Reset
                        </button>
                    )}
                </p>
            </div>
        );
    }
}

export default connect(
    state => ({state: state.filter}),
    {filterData}
)(Calendar)