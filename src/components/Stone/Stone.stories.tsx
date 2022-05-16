/* eslint-disable */
import Stone, {StoneType} from './Stone';

export default {
  title: "Stone",
};

export const Default = () => <Stone stoneType={StoneType.Black} />;

Default.story = {
  name: 'default',
};
