import { InternalData, Page, View } from 'tsxml';
import Badge from '../../../src/Badge/index.axml';
import Container from '../../../src/Container/index.axml';
import Grid from '../../../src/Grid/index.axml';

export default ({
  items2,
  items3,
  items4,
  items5,
  items2withDesc,
  items3withDesc,
  itemsCustom,
  props,
  scrollItems,
}: InternalData) => (
  <Page>
    <Container title="2列">
      <Grid items={items2} onTap="handleTapItem" columns={2} />
    </Container>
    <Container title="3列">
      <Grid items={items3} onTap="handleTapItem" columns={3} />
    </Container>
    <Container title="4列">
      <Grid items={items4} onTap="handleTapItem" columns={4} />
    </Container>
    <Container title="5列">
      <Grid items={items5} onTap="handleTapItem" columns={5} />
    </Container>
    <Container title="5列-展示分割线">
      <Grid items={items5} onTap="handleTapItem" columns={5} showDivider />
    </Container>
    <Container title="2列-带描述">
      <Grid items={items2withDesc} onTap="handleTapItem" columns={2} />
    </Container>
    <Container title="3列-带描述">
      <Grid items={items3withDesc} onTap="handleTapItem" columns={3} />
    </Container>
    <Container title="2列-元素横向布局">
      <Grid
        items={items2}
        onTap="handleTapItem"
        columns={2}
        gridItemLayout="horizontal"
      />
    </Container>
    <Container title="3列-元素横向布局">
      <Grid
        items={items3}
        onTap="handleTapItem"
        columns={3}
        gridItemLayout="horizontal"
      />
    </Container>
    <Container title="可滑动">
      <Grid items={scrollItems} onTap="handleTapItem" mode="scroll" />
    </Container>
    <Container title="自定义图标大小">
      <Grid
        items={itemsCustom}
        onTap="handleTapItem"
        columns={5}
        iconSize={44}
      />
    </Container>
    {/* #if ALIPAY */}
    <Container title="自定义">
      <Grid items={itemsCustom} onTap="handleTapItem" columns={5}>
        <View slot="icon" slot-scope="props">
          {props.value.tag ? (
            <Badge offsetX="-10px" type="text" text={props.value.tag}>
              <image src={props.value.icon} style="width: 44px; height: 44px" />
            </Badge>
          ) : (
            <image src={props.value.icon} style="width: 44px; height: 44px" />
          )}
        </View>
        <View slot="title" slot-scope="props">
          第{props.index + 1}项
        </View>
        <View slot="description" slot-scope="props">
          描述{props.index + 1}
        </View>
      </Grid>
    </Container>
    {/* #endif */}
  </Page>
);