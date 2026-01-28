import { StyleSheet } from "react-native";

export const colors = {
  background: "#F9FAFB",
  card: "#FFFFFF",
  primary: "#2563EB",
  secondary: "#c84b4b",
  textPrimary: "#111827",
  textSecondary: "#6B7280",
  border: "#E5E7EB",
};

export const spacing = {
  xs: 6,
  sm: 10,
  md: 16,
  lg: 24,
};

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: spacing.lg,
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    color: colors.textPrimary,
    marginBottom: spacing.md,
  },

  input: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    padding: spacing.md,
    fontSize: 16,
    marginBottom: spacing.sm,
    color: colors.textPrimary,
  },

  button: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.md,
    borderRadius: 12,
    alignItems: "center",
    marginTop: spacing.sm,
    marginBottom: spacing.lg,
  },

  buttonSecondary: {
    backgroundColor: colors.secondary,
    paddingVertical: spacing.md,
    borderRadius: 12,
    alignItems: "center",
    marginTop: spacing.sm,
    marginBottom: spacing.lg,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },

  card: {
    backgroundColor: colors.card,
    borderRadius: 14,
    padding: spacing.md,
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },

  label: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.textSecondary,
    marginBottom: spacing.xs,
  },

  value: {
    fontSize: 16,
    color: colors.textPrimary,
    marginBottom: spacing.xs,
  },
});
