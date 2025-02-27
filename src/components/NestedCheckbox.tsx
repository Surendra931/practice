import React from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';

interface TreeNode {
  id: number;
  label: string;
  children?: TreeNode[];
}

interface NestedCheckboxProps {
  data: TreeNode[];
  checkedItems: { [key: number]: boolean };
  handleChange: (id: number, checked: boolean) => void;
}

const NestedCheckbox: React.FC<NestedCheckboxProps> = ({ data, checkedItems, handleChange }) => {
  const handleParentChange = (id: number, checked: boolean) => {
    handleChange(id, checked);
  };

  return (
    <div style={{ paddingLeft: 20 }}>
      {data.map((item) => (
        <div key={item.id}>
          <FormControlLabel
            control={
              <Checkbox
                checked={!!checkedItems[item.id]}
                onChange={(e) => handleParentChange(item.id, e.target.checked)}
              />
            }
            label={item.label}
          />
          {item.children && (
            <NestedCheckbox
              data={item.children}
              checkedItems={checkedItems}
              handleChange={handleChange}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default NestedCheckbox;
