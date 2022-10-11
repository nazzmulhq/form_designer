import { Card, CardContent } from "@material-ui/core";
import React from "react";
import { getDefaultValueByQuestionType } from "./Service";
import Style from '../Questions/Style';
import { ACKNOWLEDGE, AREA, AUDIO, CALCULATE, DATE, DATE_TIME, DECIMAL, MULTIPLE_SELECT, PHOTO, SELECT_ONE, TEXT, BARCODE, NUMBER, FILE, NOTE, POINT, QUESTION_MATRIX, RANGE, RANKING, TIME, VIDEO, RATING } from "./Constants";
import { useDispatch } from "react-redux";
import { add } from '../../../redux/QuestionSlice';
import { Col, Grid, Row } from "antd";
import DatetimeSVG from '../../../Icons/date-time.svg';
import TextSvg from '../../../Icons/text.svg';
import SelectOneSvg from '../../../Icons/select-one.svg';
import MultiSelectSvg from '../../../Icons/select-many.svg';
import NumberSvg from '../../../Icons/number.svg';
import NoteSvg from '../../../Icons/note.svg';
import CalculateSvg from '../../../Icons/calculate.svg';
import DateSvg from '../../../Icons/date.svg';
import DecimalSvg from '../../../Icons/decimal.svg';
import FileSvg from '../../../Icons/file.svg';
import PhotoSvg from '../../../Icons/date.svg';
import AudioSvg from '../../../Icons/audio.svg';
import VideoSvg from '../../../Icons/video.svg';
import RatingSvg from '../../../Icons/rating.svg';
import RankingSvg from '../../../Icons/ranking.svg';
import LocationSvg from '../../../Icons/location.svg';


export default function QuestionTypes(props: any) {
    const classes: any = Style();
    const dispatch = useDispatch();

    const quesButtons = () => {
        return [
            {
                type: TEXT,
                src: TextSvg
            },
            {
                type: SELECT_ONE,
                src: SelectOneSvg
            },
            {
                type: MULTIPLE_SELECT,
                src: MultiSelectSvg,
            },
            {
                type: NUMBER,
                src: NumberSvg,
            },
            {
                type: NOTE,
                src: NoteSvg,
            },
            {
                type: CALCULATE,
                src: CalculateSvg,
            },
            {
                type: DATE_TIME,
                src: DatetimeSVG
            },
            {
                type: DATE,
                src: DateSvg
            },
            {
                type: DECIMAL,
                src: DecimalSvg,
            },
            {
                type: PHOTO,
                src: PhotoSvg
            },
            {
                type: POINT,
                src: LocationSvg
            },
            // QUESTION_MATRIX,
            // RANGE,
            {
                type: RATING,
                src: RatingSvg
            },
            // RANKING,
            // TIME,
            {
                type: VIDEO,
                src: VideoSvg,
            },
            {
                type: AUDIO,
                src: AudioSvg,
            },
            // ACKNOWLEDGE,
            // AREA,
            // BARCODE,
            {
                type: FILE,
                src: FileSvg,
            }
        ]
    }

    const questionBtnClick = (type: string) => {
        dispatch(add({
            ...getDefaultValueByQuestionType(type),
            type,
            path: props.currentQustion.path
        }));
        props.close();
    }

    return (
        <Card variant="outlined" >
            <CardContent >
                <Row>
                    {quesButtons().map(({ type, src }: any, i: number) => {
                        return (
                            <Col key={i} span={6} style={{ marginTop: 5, marginBottom: 5, cursor: 'pointer' }}>
                                <span key={i} className={classes.iconStyle} onClick={() => questionBtnClick(type)}>
                                    <img className={classes.iconStyle} width="30" height="25" src={src} /> <span style={{ paddingLeft: 7 }}></span>{type}
                                    <p></p>
                                </span>
                            </Col>
                        )
                    })}
                </Row>
            </CardContent>
        </Card>
    )
}