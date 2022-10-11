import { makeStyles, Theme } from '@material-ui/core';
import AcknowledgeIcon from '../../../Icons/acknowledge.png';
import AreaIcon from '../../../Icons/area.png';
import AudioIcon from '../../../Icons/audio.png';
import BarcodeIcon from '../../../Icons/barcode.png';
import CalculateIcon from '../../../Icons/calculate.png';
import DateTimeIcon from '../../../Icons/date-time.png';
import DateIcon from '../../../Icons/date.png';
import DecimalIcon from '../../../Icons/decimal.png';
import FileIcon from '../../../Icons/file.png';
import NoteIcon from '../../../Icons/note.png';
import NumberIcon from '../../../Icons/number.png';
import PhotoIcon from '../../../Icons/photo.png';
import PointIcon from '../../../Icons/point.png';
import QuestionMatrixIcon from '../../../Icons/question-matrix.png';
import RangeIcon from '../../../Icons/range.png';
import RankingIcon from '../../../Icons/ranking.png';
import SelectManyIcon from '../../../Icons/select-many.png';
import SelectOneIcon from '../../../Icons/select-one.png';
import TextIcon from '../../../Icons/text.png';
import TimeIcon from '../../../Icons/time.png';
import VideoIcon from '../../../Icons/video.png';
import {
  ACKNOWLEDGE,
  AREA,
  AUDIO,
  BARCODE,
  CALCULATE,
  DATE,
  DATE_TIME,
  DECIMAL,
  FILE,
  MULTIPLE_SELECT,
  NOTE,
  NUMBER,
  PHOTO,
  POINT,
  QUESTION_MATRIX,
  RANGE,
  RANKING,
  SELECT_ONE,
  RATING,
  TEXT,
  TIME,
  VIDEO,
} from '../QuesTypes/Constants';

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
import TimeSvg from '../../../Icons/time.svg';
import RatingSvg from '../../../Icons/rating.svg';
import RankingSvg from '../../../Icons/ranking.svg';
import RangeSvg from '../../../Icons/range.svg';
import LocationSvg from '../../../Icons/location.svg';
import AreaSvg from '../../../Icons/area.svg';
import BarcodeSvg from '../../../Icons/area.svg';
import QuestionMatrixSvg from '../../../Icons/question-matrix.svg';
import AcknowledgeSvg from '../../../Icons/acknowledge.svg';

const quesStyle = makeStyles((theme: Theme) => ({
  questionBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0px !important',
    marginTop: 0,
    transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
    '&:hover': {
      boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    },
  },
  cardStyle: {
    transition: 'ease',
    '&:hover': {
      '& $addBoxIcon': {
        display: 'block',
      },
    },
  },
  questionContainer: {
    padding: 0,
  },
  dragStyle: {
    cursor: 'grabbing',
    '&:hover': {
      color: 'blue',
    },
  },
  nameSection: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0px !important',
  },
  questionName: {
    margin: 0,
    color: '#607d8b',
  },
  questionHint: {
    margin: 0,
    fontSize: 13,
    color: '#607d8b',
  },
  iconSize: {
    fontSize: 28,
    padding: 5,
  },
  editIcon: {
    color: '#4CAF50',
    fontSize: 16,
    padding: 5,
  },
  deleteIcon: {
    color: '#EF5350',
    fontSize: 16,
    padding: 5,
  },
  settingsIcon: {
    color: '#BDBDBD',
    fontSize: 16,
    padding: 5,
  },
  copyIcon: {
    color: '#0091ea',
    fontSize: 28,
    padding: 5,
  },
  formField: {
    textAlign: 'right',
  },
  question: {
    padding: 10,
    marginLeft: 15,
  },
  iconSection: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column',
    borderLeft: '1px solid lightgray',
    height: '100px',
  },
  addBoxIcon: {
    display: 'none',
    color: 'white',
    fontSize: 16,
    padding: 5,
    '&:hover': {
      color: 'white',
      backgroundColor: '#4dd0e1',
      borderRadius: '20%',
    },
  },
  addBoxIconPosition: {
    borderRadius: '20%',
    position: 'absolute',
    left: -27,
    bottom: 0,
    backgroundColor: 'lightgray',
  },
  iconBorderRight: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRight: '1px solid lightgray',
    height: '100px',
    width: '60px',
  },
  iconStyle: {
    margin: 0,
    '&:hover': {
      color: '#0091ea'
    },

  },

}));

export const getImageByType = (type: string) => {
  switch (type) {
    case TEXT:
      return TextSvg;
    case SELECT_ONE:
      return SelectOneSvg;
    case MULTIPLE_SELECT:
      return MultiSelectSvg;
    case ACKNOWLEDGE:
      return AcknowledgeSvg;
    case AREA:
      return AreaSvg;
    case BARCODE:
      return BarcodeSvg;
    case NUMBER:
      return NumberSvg;
    case FILE:
      return FileSvg;
    case NOTE:
      return NoteSvg;
    case CALCULATE:
      return CalculateSvg;
    case AUDIO:
      return AudioSvg;
    case DATE_TIME:
      return DatetimeSVG;
    case DATE:
      return DateSvg;
    case DECIMAL:
      return DecimalSvg;
    case PHOTO:
      return PhotoSvg;
    case POINT:
      return LocationSvg;
    case QUESTION_MATRIX:
      return QuestionMatrixSvg;
    case RANGE:
      return RangeSvg;
    case RANKING:
      return RankingSvg;
    case TIME:
      return TimeSvg;
    case VIDEO:
      return VideoSvg;
    case RATING:
      return RatingSvg;
    default:
      TextSvg;
  }
};

export default quesStyle;
