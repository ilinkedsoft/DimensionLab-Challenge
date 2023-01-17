import React, { createContext, useCallback, useContext, useState } from "react";

export type ShapeType = 'cube' | 'pyramid' | 'sphere';

export interface AttributeOption {
  color: string;
  count: number;
  type: ShapeType;
  zoom: number;
}

export interface AttributeProps extends AttributeOption {
  changeColor: (color: string) => void;
  changeCount: (count: number) => void;
  changeType: (type: ShapeType) => void;
  changeZoom: (zoom: number) => void;
  children?: React.ReactNode;
}

const AttributeContext = createContext<AttributeProps | undefined>(undefined);
AttributeContext.displayName = "AttributeContext";

export const useAttribute = () => {
  const attributeContext = useContext(AttributeContext);

  if (!attributeContext) {
    throw new Error("useAttribute must be used within AttributeProvider");
  }

  return attributeContext;
};

export const useAttributeOptions = (): AttributeProps => {
  const [option, setOption] = useState<AttributeOption>({
    color: '#ffdd00',
    count: 2,
    type: 'cube',
    zoom: 10,
  });

  const changeColor = useCallback((color: string) => {
    setOption((option) => ({ ...option, color }));
  }, []);

  const changeCount = useCallback((count: number) => {
    setOption((option) => ({ ...option, count }));
  }, []);

  const changeType = useCallback((type: ShapeType) => {
    setOption((option) => ({ ...option, type }));
  }, []);

  const changeZoom = useCallback((zoom: number) => {
    setOption((option) => ({ ...option, zoom }));
  }, []);

  return {
    ...option,
    changeColor,
    changeCount,
    changeType,
    changeZoom
  };
};

const AttributeProvider: React.FC<AttributeProps> = ({
  children,
  ...remainingProps
}) => {
  return (
    <AttributeContext.Provider value={remainingProps}>
      {children}
    </AttributeContext.Provider>
  );
};

export default AttributeProvider;
