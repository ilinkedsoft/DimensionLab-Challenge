import { render, renderHook } from '@testing-library/react';

import VisualUI from '.';
import AttributeProvider, { useAttributeOptions } from '../context/AttributeContext';

const wrapperStyle = { height: 500 };

test('renders nodes and edges', () => {
  const { result } = renderHook(useAttributeOptions);
  
  const { container } = render(
    <AttributeProvider {...result.current}>
      <div style={wrapperStyle}>
        <VisualUI />
      </div>
    </AttributeProvider>
  );

  // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
  const nodes = container.getElementsByClassName('react-flow__node');
  // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
  const edges = container.getElementsByClassName('react-flow__edge');

  expect(nodes.length).toBe(5);
  expect(edges.length).toBe(4);
});