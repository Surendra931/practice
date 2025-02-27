import React, { useState } from 'react';
import NestedCheckbox from '../components/NestedCheckbox';

interface TreeNode {
  id: number;
  label: string;
  children?: TreeNode[];
}

const CheckboxPage: React.FC = () => {
  const [checkedItems, setCheckedItems] = useState<{ [key: number]: boolean }>({});

  const initialData: TreeNode[] = [
    {
      id: 1,
      label: 'Parent 1',
      children: [
        { id: 11, label: 'Child 1.1' },
        { id: 12, label: 'Child 1.2' },
        { id: 13, label: 'Child 1.3' },
      ],
    },
    {
      id: 2,
      label: 'Parent 2',
      children: [
        { id: 21, label: 'Child 2.1' },
        { id: 22, label: 'Child 2.2' }


      ],
    },
  ];

  const handleChange = (id: number, checked: boolean) => {
    const newChecked = { ...checkedItems };
    const updateTree = (nodes: TreeNode[]) => {
      nodes.forEach((node) => {
        newChecked[node.id] = checked;
        if (node.children) updateTree(node.children);
      });
    };

    newChecked[id] = checked;

    const parentNode = initialData.find((node) => node.id === id);
    if (parentNode && parentNode.children) {
      updateTree(parentNode.children);
    }

    setCheckedItems(newChecked);
  };

  return (
    <div>
      <h2>Nested Checkbox System</h2>
      <NestedCheckbox data={initialData} checkedItems={checkedItems} handleChange={handleChange} />
    </div>
  );
};

export default CheckboxPage;
