import 'package:bloc/bloc.dart';
import 'package:meta/meta.dart';

part 'onbording_event.dart';
part 'onbording_state.dart';

class OnbordingBloc extends Bloc<OnbordingEvent, OnbordingState> {
  OnbordingBloc() : super(OnbordingInitial()) {
    on<OnbordingEvent>((event, emit) {
      // TODO: implement event handler
    });
  }
}
