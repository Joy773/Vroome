import { ChangeEvent, useState } from 'react';

import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useDarkMode } from '../../contexts/DarkModeContext';

import { Formik, Form } from "formik";

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

const AsideLeft = () => {
    const { isDarkMode } = useDarkMode();
    const [state, setState] = useState({
        gilad: true,
        jason: false,
        antoine: false,
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setState({
            ...state,
            [event.target.name]: event.target.checked,
        });
    };
    function valueLabelFormat(value: number) {
        return `${value}`;
    }

    function calculateValue(value: number) {
        return value;
    }

    const [value, setValue] = useState<number>(80);

    const handlePriceChange = (event: Event, newValue: number | number[]) => {
        if (typeof newValue === 'number') {
            setValue(newValue);
        }
    };

    return (
        <section className="flex flex-col gap-8">
            <aside className={`min-w-[260px] h-full left-0 top-0 hidden py-8 px-8 md:block md:m-0 transition-colors duration-200 [&>h3]:font-semibold [&>h3]:text-xs [&>h3]:leading-[150%] [&>h3]:flex [&>h3]:items-center [&>h3]:tracking-[0.02em] [&>div]:flex [&>div]:relative [&>div]:mb-[70px] [&>div_svg]:w-5 [&>div_svg]:h-5 [&>div_input]:w-full [&>div_input]:h-11 [&>div_input]:rounded-[70px] [&>div_input]:pl-[45px] [&>div_input]:mt-7 [&>div_input::placeholder]:font-medium [&>div_input::placeholder]:text-sm [&>div_input::placeholder]:leading-[150%] [&>div_input::placeholder]:flex [&>div_input::placeholder]:items-center [&>div_input::placeholder]:text-justify [&>div_input::placeholder]:tracking-[-0.02em] ${isDarkMode ? 'bg-gray-800 [&>h3]:text-gray-400 [&>div_input]:bg-gray-700 [&>div_input]:border-gray-600 [&>div_input]:border [&>div_input::placeholder]:text-gray-400' : 'bg-white [&>h3]:text-[#94a7cb] [&>div_input]:bg-white [&>div_input]:border-[rgba(195,212,233,0.4)] [&>div_input]:border [&>div_input::placeholder]:text-[#3d5278]'}`}>
                <h3>SEARCH</h3>
                <div>

                    <Formik
                        initialValues={{
                            toggle: false,
                            checked: [],
                        }}
                        onSubmit={async (values) => {
                            await sleep(500);
                            alert(JSON.stringify(values, null, 2));
                        }}
                    >
                        {({ values }) => (
                            <div className={`[&>span]:font-semibold [&>span]:text-sm [&>span]:leading-[150%] [&>span]:flex [&>span]:items-center [&>span]:text-justify [&>span]:tracking-[-0.02em] ${isDarkMode ? '[&>span]:text-gray-300' : '[&>span]:text-[#3D5278]'}`}>

                                <Form>
                                    <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
                                        <h3 className={isDarkMode ? "text-gray-400" : "text-[#94a7cb]"}>TYPE</h3>
                                        <FormGroup>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox checked={true} onChange={handleChange} name="sport" sx={{ color: isDarkMode ? '#9ca3af' : 'inherit', '&.Mui-checked': { color: '#3563E9' } }} />
                                                }
                                                label={<span className={isDarkMode ? 'text-gray-300' : 'text-[#3D5278]'}>Sport (10)</span>}
                                            />
                                            <FormControlLabel
                                                control={
                                                    <Checkbox checked={false} onChange={handleChange} name="SUV" sx={{ color: isDarkMode ? '#9ca3af' : 'inherit', '&.Mui-checked': { color: '#3563E9' } }} />
                                                }
                                                label={<span className={isDarkMode ? 'text-gray-300' : 'text-[#3D5278]'}>SUV (12)</span>}
                                            />
                                            <FormControlLabel
                                                control={
                                                    <Checkbox checked={false} onChange={handleChange} name="MPV" sx={{ color: isDarkMode ? '#9ca3af' : 'inherit', '&.Mui-checked': { color: '#3563E9' } }} />
                                                }
                                                label={<span className={isDarkMode ? 'text-gray-300' : 'text-[#3D5278]'}>MPV (16)</span>}
                                            />
                                            <FormControlLabel
                                                control={
                                                    <Checkbox checked={false} onChange={handleChange} name="Sedan" sx={{ color: isDarkMode ? '#9ca3af' : 'inherit', '&.Mui-checked': { color: '#3563E9' } }} />
                                                }
                                                label={<span className={isDarkMode ? 'text-gray-300' : 'text-[#3D5278]'}>Sedan (20)</span>}
                                            />
                                            <FormControlLabel
                                                control={
                                                    <Checkbox checked={false} onChange={handleChange} name="Coupe" sx={{ color: isDarkMode ? '#9ca3af' : 'inherit', '&.Mui-checked': { color: '#3563E9' } }} />
                                                }
                                                label={<span className={isDarkMode ? 'text-gray-300' : 'text-[#3D5278]'}>Coupe (14)</span>}
                                            />
                                            <FormControlLabel
                                                control={
                                                    <Checkbox checked={false} onChange={handleChange} name="Hatchback" sx={{ color: isDarkMode ? '#9ca3af' : 'inherit', '&.Mui-checked': { color: '#3563E9' } }} />
                                                }
                                                label={<span className={isDarkMode ? 'text-gray-300' : 'text-[#3D5278]'}>Hatchback (14)</span>}
                                            />
                                        </FormGroup>

                                        <h3 className={isDarkMode ? "text-gray-400" : "text-[#94a7cb]"}>CAPACITY</h3>
                                        <FormGroup>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox checked={true} onChange={handleChange} name="person" sx={{ color: isDarkMode ? '#9ca3af' : 'inherit', '&.Mui-checked': { color: '#3563E9' } }} />
                                                }
                                                label={<span className={isDarkMode ? 'text-gray-300' : 'text-[#3D5278]'}>2 Person (10)</span>}
                                            />
                                            <FormControlLabel
                                                control={
                                                    <Checkbox checked={false} onChange={handleChange} name="person" sx={{ color: isDarkMode ? '#9ca3af' : 'inherit', '&.Mui-checked': { color: '#3563E9' } }} />
                                                }
                                                label={<span className={isDarkMode ? 'text-gray-300' : 'text-[#3D5278]'}>4 Person (14)</span>}
                                            />
                                            <FormControlLabel
                                                control={
                                                    <Checkbox checked={false} onChange={handleChange} name="person" sx={{ color: isDarkMode ? '#9ca3af' : 'inherit', '&.Mui-checked': { color: '#3563E9' } }} />
                                                }
                                                label={<span className={isDarkMode ? 'text-gray-300' : 'text-[#3D5278]'}>6 Person (12)</span>}
                                            />
                                            <FormControlLabel
                                                control={
                                                    <Checkbox checked={false} onChange={handleChange} name="person" sx={{ color: isDarkMode ? '#9ca3af' : 'inherit', '&.Mui-checked': { color: '#3563E9' } }} />
                                                }
                                                label={<span className={isDarkMode ? 'text-gray-300' : 'text-[#3D5278]'}>8 or More (16)</span>}
                                            />
                                        </FormGroup>

                                        <h3 className={isDarkMode ? "text-gray-400" : "text-[#94a7cb]"}>PRICE</h3>
                                        <FormGroup>
                                            <Slider
                                                value={value}
                                                min={5}
                                                step={1}
                                                max={100}
                                                scale={calculateValue}
                                                getAriaValueText={valueLabelFormat}
                                                valueLabelFormat={valueLabelFormat}
                                                onChange={handlePriceChange}
                                                valueLabelDisplay="auto"
                                                aria-labelledby="non-linear-slider"
                                                sx={{
                                                    color: '#3563E9',
                                                    '& .MuiSlider-thumb': {
                                                        backgroundColor: '#3563E9',
                                                    },
                                                    '& .MuiSlider-track': {
                                                        backgroundColor: '#3563E9',
                                                    },
                                                }}
                                            />
                                            <Typography id="non-linear-slider" gutterBottom sx={{ color: isDarkMode ? '#9ca3af' : '#3D5278' }}>
                                                Max. $: {(calculateValue(value))}
                                            </Typography>
                                        </FormGroup>
                                    </FormControl>
                                </Form>
                            </div>
                        )}
                    </Formik>
                </div>
            </aside>
        </section>
    )
}

export default AsideLeft