import { Popper } from '@mui/base';
import * as React from 'react';
import { SvgArrow } from './ChoosedDay.styled';
import {
  PopperButton,
  PopperItem,
  PopperList,
  PopperText,
} from './popup.sryled';
import { CATEGORY } from '../../data/constants';
import { useDispatch, useSelector } from 'react-redux';
import { updateTask } from '../../redux/tasks/operations';
import { selectTasks } from '../../redux/tasks/selectors';
// import { ClickAwayListener } from '@mui/base';

export default function SimplePopper({ category, number }) {
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = React.useState(null);
  let firstLink = '';
  let secondLink = '';

  if (category === CATEGORY.TODO) {
    firstLink = 'In progress';
    secondLink = 'Done';
  }
  if (category === CATEGORY.INPROGRESS) {
    firstLink = 'To do';
    secondLink = 'Done';
  }
  if (category === CATEGORY.DONE) {
    firstLink = 'To do';
    secondLink = 'In progress';
  }
  // const allTasks = useSelector(selectTasks);

  const handleClick = event => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const hendlerTaskChange = (id, newCategory) => {
    // let findTask = allTasks.filter(task => task._id === id);
    // findTask[0].category = newCategory;
    const changeTask = {
      _id: id,
      category: newCategory,
     
    };
    
    dispatch(updateTask(changeTask));
    return;
  };

  const handleFirst = event => {
    const category = event.currentTarget.dataset.category;

    if (category === 'In progress') {
      const id = event.currentTarget.dataset.id;
      
      hendlerTaskChange(id, CATEGORY.INPROGRESS);
      return;
    }
    // hendlerTaskChange({ _id: id, category: CATEGORY.INPROGRESS });

    if (category === 'To do') {
      // changeTask(event.currentTarget.dataset.id, CATEGORY.TODO)
      return;
    }
    if (category === 'Done') {
      // changeTask(event.currentTarget.dataset.id, CATEGORY.DONE)
      return;
    }
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <>
      <SvgArrow aria-describedby={id} type="button" onClick={handleClick} />
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <PopperList>
          <PopperItem>
            <PopperText>{firstLink}</PopperText>
            <PopperButton
              onClick={handleFirst}
              data-id={number}
              data-category={firstLink}
            >
              {' '}
              <SvgArrow />
            </PopperButton>
          </PopperItem>
          <PopperItem>
            <PopperText>{secondLink}</PopperText>
            <PopperButton
              onClick={handleFirst}
              data-id={number}
              data-category={secondLink}
            >
              <SvgArrow
                onClick={handleFirst}
                data-id={number}
                data-category={secondLink}
              />
            </PopperButton>
          </PopperItem>
        </PopperList>
      </Popper>
    </>
  );
}
