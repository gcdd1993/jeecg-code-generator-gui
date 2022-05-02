import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';

export const columns: BasicColumn[] = [
    {
    title: '报告名称',
    dataIndex: 'name'
   },
   {
    title: '企业名称',
    dataIndex: 'comName'
   },
   {
    title: '服务机构名称',
    dataIndex: 'agencyName'
   },
   {
    title: '编制日期',
    dataIndex: 'reportDate'
   },
   {
    title: '附录',
    dataIndex: 'appendix'
   },
];

export const searchFormSchema: FormSchema[] = [
 {
    label: '报告名称',
    field: 'name',
    component: 'Input'
  },
 {
    label: '企业名称',
    field: 'comName',
    component: 'Input'
  },
];

export const formSchema: FormSchema[] = [
  // TODO 主键隐藏字段，目前写死为ID
  {label: '', field: 'id', component: 'Input', show: false},
  {
    label: '报告名称',
    field: 'name',
    component: 'Input',
  },
  {
    label: '企业名称',
    field: 'comName',
    component: 'Input',
  },
  {
    label: '服务机构名称',
    field: 'agencyName',
    component: 'Input',
  },
  {
    label: '编制日期',
    field: 'reportDate',
    component: 'DatePicker'
  },
  {
    label: '附录',
    field: 'appendix',
    component: 'Input',
  },
];
