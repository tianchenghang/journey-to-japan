import * as Haptics from "expo-haptics";

export function hapticsError() {
  Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
}

export function hapticsSuccess() {
  Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
}

export function hapticsWarning() {
  Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
}

export function hapticsHeavy() {
  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
}

export function hapticsLight() {
  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
}

export function hapticsMedium() {
  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
}

export function hapticsRigid() {
  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Rigid);
}

export function hapticSoft() {
  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft);
}
