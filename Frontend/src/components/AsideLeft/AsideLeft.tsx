import { ChangeEvent, useState } from 'react';

import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import { Formik, Form } from "formik";

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

const AsideLeft = () => {
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
            <aside className="min-w-[260px] h-full left-0 top-0 bg-white hidden py-8 px-8 md:block md:m-0 [&>h3]:font-semibold [&>h3]:text-xs [&>h3]:leading-[150%] [&>h3]:flex [&>h3]:items-center [&>h3]:tracking-[0.02em] [&>h3]:text-[#94a7cb] [&>div]:flex [&>div]:relative [&>div]:mb-[70px] [&>div_svg]:w-5 [&>div_svg]:h-5 [&>div_input]:w-full [&>div_input]:h-11 [&>div_input]:bg-white [&>div_input]:border [&>div_input]:border-[rgba(195,212,233,0.4)] [&>div_input]:rounded-[70px] [&>div_input]:pl-[45px] [&>div_input]:mt-7 [&>div_input::placeholder]:font-medium [&>div_input::placeholder]:text-sm [&>div_input::placeholder]:leading-[150%] [&>div_input::placeholder]:flex [&>div_input::placeholder]:items-center [&>div_input::placeholder]:text-justify [&>div_input::placeholder]:tracking-[-0.02em] [&>div_input::placeholder]:text-[#3d5278]">
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
                            <div className="[&>span]:font-semibold [&>span]:text-sm [&>span]:leading-[150%] [&>span]:flex [&>span]:items-center [&>span]:text-justify [&>span]:tracking-[-0.02em] [&>span]:text-[#3D5278]">

                                <Form>
                                    <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
                                        <h3>TYPE</h3>
                                        <FormGroup>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox checked={true} onChange={handleChange} name="sport" />
                                                }
                                                label="Sport (10)"
                                            />
                                            <FormControlLabel
                                                control={
                                                    <Checkbox checked={false} onChange={handleChange} name="SUV" />
                                                }
                                                label="SUV (12)"
                                            />
                                            <FormControlLabel
                                                control={
                                                    <Checkbox checked={false} onChange={handleChange} name="MPV" />
                                                }
                                                label="MPV (16)"
                                            />
                                            <FormControlLabel
                                                control={
                                                    <Checkbox checked={false} onChange={handleChange} name="Sedan" />
                                                }
                                                label="Sedan (20)"
                                            />
                                            <FormControlLabel
                                                control={
                                                    <Checkbox checked={false} onChange={handleChange} name="Coupe" />
                                                }
                                                label="Coupe (14)"
                                            />
                                            <FormControlLabel
                                                control={
                                                    <Checkbox checked={false} onChange={handleChange} name="Hatchback" />
                                                }
                                                label="Hatchback (14)"
                                            />
                                        </FormGroup>

                                        <h3>CAPACITY</h3>
                                        <FormGroup>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox checked={true} onChange={handleChange} name="person" />
                                                }
                                                label="2 Person (10)"
                                            />
                                            <FormControlLabel
                                                control={
                                                    <Checkbox checked={false} onChange={handleChange} name="person" />
                                                }
                                                label="4 Person (14)"
                                            />
                                            <FormControlLabel
                                                control={
                                                    <Checkbox checked={false} onChange={handleChange} name="person" />
                                                }
                                                label="6 Person (12)"
                                            />
                                            <FormControlLabel
                                                control={
                                                    <Checkbox checked={false} onChange={handleChange} name="person" />
                                                }
                                                label="8 or More (16)"
                                            />
                                        </FormGroup>

                                        <h3>PRICE</h3>
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
                                            />
                                            <Typography id="non-linear-slider" gutterBottom>
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