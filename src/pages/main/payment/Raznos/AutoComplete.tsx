import React, { FC, SetStateAction, useContext, useState, useEffect, MouseEvent } from 'react';
import { IClassNameProps } from '@bem-react/core';

import { RaznosStateContext, dispatchIsChartAccountReset } from '.';
import { Link } from '../../../../blocks/Link';
import { AutoComplete as AC, AutoCompleteCompleteEvent, AutoCompleteChangeEvent } from '../../../../blocks/AutoComplete';
import { api } from '../../../../store';

// AutoComplete field
export type ACfield = {
  name: string;
  id: string;
}

export interface AutoCompleteProps extends IClassNameProps {
  ACfield: string;
  apiHandler: string;
  linkText: string;
  dispatchContractsByContragent: ((selectedId:string) => void) | (() => undefined);
  className: string;
  dropdown?: boolean;
}

export const AutoComplete: FC<AutoCompleteProps> = ({
  ACfield,
  apiHandler,
  linkText,
  dispatchContractsByContragent,
  className,
  dropdown,
}) => {
  const {dispatch} = useContext(RaznosStateContext);

  const [AClist, setAClist] = useState<ACfield[]>([]);
  const [selected, setSelected] = useState<ACfield | false>(false);
  const [filtered, setFiltered] = useState<ACfield[] | undefined>(undefined);
  const [isAutocomplete, setIsAutocomplete] = useState(false);

  const dispatchContragentList = async () => {
    const res = await api.get(apiHandler);
    setAClist(res.data as SetStateAction<ACfield[]>);
  };

  const searchContragent = (event: AutoCompleteCompleteEvent) => {
    let _filtered;

    if (!event.query.trim().length) {
      _filtered = [...AClist];
    } else {
      _filtered = AClist.filter((contragent) =>
        contragent.name.toLowerCase().includes(event.query.toLowerCase())
      );
    }

    setFiltered(_filtered);
  };

  const handleChange = (ev: MouseEvent) => {
    ev.preventDefault();
    setIsAutocomplete(!isAutocomplete);
  };

  const isACvalid = !isAutocomplete || (selected && selected.id);

  // в поле "План счетов" выбрали "Прочие (76)" ?
  const isChartAccountReset = (selected && selected.name) ? selected.name.indexOf('76') >= 0 : false;

  useEffect(() => {
    isACvalid && selected && dispatchContractsByContragent(selected.id);
  },[isACvalid]);

  useEffect(() => {
    dispatch && dispatchIsChartAccountReset(dispatch, isChartAccountReset);
  },[selected]);

  useEffect(() => {
    dispatchContragentList();
  },[]);

  return (
    isAutocomplete ?
      <AC
        field="name"
        value={selected}
        suggestions={filtered}
        completeMethod={searchContragent}
        onChange={({value}: AutoCompleteChangeEvent) => setSelected(value as ACfield)}
        className={className}
        forceSelection
        dropdown={dropdown}
      /> :
      <Link handleClick={handleChange}>{linkText}</Link>
  );
};
