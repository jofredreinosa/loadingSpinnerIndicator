import {HttpContextToken, HttpInterceptorFn} from '@angular/common/http';
import {inject} from "@angular/core";
import {LoadingService} from "../services/loading.service";
import {finalize} from "rxjs";

export const NoLoading = new HttpContextToken(() => false);

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingService = inject(LoadingService);

  if (req.context.get(NoLoading)) {
    return next(req);
  }

  loadingService.loadingOn();

  return next(req).pipe(
    finalize(() => {
      setTimeout(() => {
        loadingService.loadingOff();
      }, 1000)
    })
  );
};
