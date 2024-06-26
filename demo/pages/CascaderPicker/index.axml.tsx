import { InternalData, Page, View } from 'tsxml';
import AntButton from '../../../src/Button/index.axml';
import AntList from '../../../src/List/index.axml';
import AntListItem from '../../../src/List/ListItem/index.axml';
import AntCascaderPicker from '../../../src/Picker/CascaderPicker/index.axml';
import AntContainer from '../../../src/Container/index.axml';

export default ({ pickerVisible, cityList, value }: InternalData) => (
  <Page>
    <AntList header="基础用法">
      <AntListItem>
        请选择省市
        <AntCascaderPicker
          slot="extra"
          placeholder="请选择归属地"
          options={cityList}
          onChange="handleCityPickerChange"
          onOk="handleCityOnOk"
          onCancel="handleDismiss"
        />
      </AntListItem>
    </AntList>

    <AntList header="默认值">
      <AntListItem>
        请选择城市
        <AntCascaderPicker
          slot="extra"
          defaultValue={['34', '330']}
          placeholder="请选择城市"
          options={cityList}
          onChange="handleCityPickerChange"
          onOk="handleCityOnOk"
        />
      </AntListItem>
    </AntList>

    <AntList header="受控模式">
      <AntListItem>
        请选择城市
        <AntCascaderPicker
          slot="extra"
          value={value}
          placeholder="请选择城市"
          options={cityList}
          onChange="handleCityPickerChange"
          onOk="handleOk"
        />
      </AntListItem>
      <View class="btn-wrapper">
        <AntButton
          inline
          onTap="handleChangeControlled"
          style="margin-right: 8px"
        >
          选择上海
        </AntButton>
        <AntButton inline onTap="handleClearControlled">
          清空
        </AntButton>
      </View>
    </AntList>

    <AntContainer style="margin-top:20rpx;">
      <AntList header="外部控制选择器是否显示">
        <AntListItem>
          请选择省市
          <AntCascaderPicker
            slot="extra"
            visible={pickerVisible}
            placeholder="请选择归属地"
            options={cityList}
            onChange="handleCityPickerChange"
            onVisibleChange="handleTriggerControlledPicker"
            onOk="handleCityOnOk"
            onCancel="handleDismiss"
          />
        </AntListItem>
      </AntList>

      <AntButton size="medium" type="primary" onTap="handleOpenPicker">
        打开 CascaderPicker
      </AntButton>
    </AntContainer>
  </Page>
);
