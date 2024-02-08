import React from 'react';
import Panel from '../../Panel/Panel';
import Label from '../../Label/Label';
import Button from '../../Button/Button';

function ContentByType({type, props, content}) {
  switch (type) {
    case 'panel': {
      return <Panel props={props} content={content} />
    }
    case 'label': {
      return <Label props={props} />
    }
    case 'button': {
      return <Button props={props} />
    }
    default: return <></>
  }
}

export default ContentByType;