import { ColorRing } from 'react-loader-spinner';
import css from './Loader.module.css';

export default function Loader() {
  return (
    <ColorRing
      visible={true}
      height="120"
      width="120"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass={css.loader}
      colors={['#ccd5ae', '#ffc8dd', '#ffafcc', '#bde0fe', '#a2d2ff']}
    />
  );
}
