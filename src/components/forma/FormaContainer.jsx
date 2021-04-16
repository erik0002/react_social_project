import React from 'react';
import Forma from "./Forma";
import { updateNewFormBodyCreator, submitFormActionCreator} from "../../redux/forma-reducer";
import { connect } from 'react-redux';


    
    let mapStateToProps = (state) => {
        return {
            FormData: state.formaDataPage.FormaPage.UserName
        }
    }

    let mapDispatchToProps = (dispatch) => {
        return {
            submitForm: () => {
                dispatch(submitFormActionCreator());
            }, 
            onNewFormChange: (body) => {
                dispatch(updateNewFormBodyCreator());
            }
        }
    }
    
    export default connect(mapStateToProps, mapDispatchToProps)(Forma);

//     let state = props.formaDataPage;
//     console.log(props.store);
   

//   let submitForm = () => {
//       props.store.dispatch(submitFormActionCreator());
//   }

//   let onNewFormChange = (body) => {
//       props.store.dispatch(updateNewFormBodyCreator(body));
//   }

//   return (
//           <Forma updateNewFormBody={onNewFormChange}
//                  submitForm={submitForm}
//                  formaPage={state}/> 
//         );
//         //   updateNewMessageBody={onNewMessageChange}
//         //            sendMessage={onSendMessageClick}
//         //            messagesPage={state}/> 
// }

// export default FormaContainer;
