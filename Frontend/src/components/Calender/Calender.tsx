import { useState, forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { DatePickerWrapperStyles } from './styles';
import DownArrow from '../../assets/icons/DownArrow';
import format from "date-fns/format";
import { Dispatch } from '../../types/index';

type Props = { dateChange: Dispatch }

interface CustomInputProps {
  onClick?: () => void;
  value?: string;
  onChange?: () => void;
}

const Calender = ({ dateChange }: Props) => {
  const [startDate, setDate] = useState(new Date);
  const today = new Date();
  const CustomInput = forwardRef<HTMLElement, CustomInputProps>(({ onClick }, ref) => ( <i onClick={onClick} ref={ref}><DownArrow /></i>));
  CustomInput.displayName = 'CustomInput';
  
  const selectDateHandler = (d: Date | null) => {
    if (d) {
      setDate(d);
      dateChange(format(d, "yyyy/MM/dd"));
    }
  }

  return (
    <>
      <DatePickerWrapperStyles />
      <DatePicker
        wrapperClassName='date-picker'
        dateFormat="yyyy/MM/dd"
        selected={startDate}
        onChange={selectDateHandler}
        customInput={<CustomInput />}
        minDate={today}
        todayButton={"Today"}
        popperPlacement="bottom"
        popperModifiers={[
          {
          name: 'flip',
          options: {
            fallbackPlacements: ["bottom"],
            }
          }
        ]}
      />
    </>
  )
}

export default Calender;